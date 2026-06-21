#!/usr/bin/env python3
"""Push toolspotr to GitHub using token"""
import subprocess, os, sys

# Read token from environment (set via shell)
token = os.environ.get("GH_TOKEN", "")
if not token:
    print("GH_TOKEN not set")
    sys.exit(1)

# Clone with token in URL won't work (system masks), so use credential helper
os.chdir(r"C:\Users\Administrator\toolspotr")

# Init git
subprocess.run(["git", "init"], capture_output=True)
subprocess.run(["git", "checkout", "-b", "main"], capture_output=True)

# Create remote
subprocess.run(["git", "remote", "add", "origin", f"https://github.com/hnyctyl-commits/toolspotr.git"], capture_output=True)

# GitHub API: create repo first
import urllib.request, json
payload = '{"name":"toolspotr","description":"Toolflow - Free Online Tools for Developers","homepage":"https://toolspotr.com","private":false,"auto_init":false}'
req = urllib.request.Request(
    "https://api.github.com/user/repos",
    data=payload.encode(),
    headers={
        "Authorization": f"Bearer {token}",
        "Accept": "application/vnd.github+json",
        "Content-Type": "application/json",
        "User-Agent": "Toolflow/1.0"
    }
)
try:
    with urllib.request.urlopen(req, timeout=30) as resp:
        r = json.loads(resp.read())
        print("Repo created:", r["full_name"])
except urllib.error.HTTPError as e:
    body = e.read().decode()
    if "already exists" in body:
        print("Repo already exists")
    else:
        print(f"Create failed: {e.code} {body[:200]}")
        sys.exit(1)

# Remove .gitignore for data files
gitignore = r"""output/data/
.DS_Store
__pycache__/
*.pyc
_create_repo.py
_check_token.py
"""
with open(".gitignore", "w") as f:
    f.write(gitignore)

# Add and commit
subprocess.run(["git", "add", "."], capture_output=True)
subprocess.run(["git", "commit", "-m", "Initial deploy: Toolflow tools site"], capture_output=True)

# Push using credential helper
# Use GIT_ASKPASS to feed the token
askpass = r"""#!/bin/sh
echo "$GH_TOKEN"
"""
with open("_askpass.sh", "w") as f:
    f.write(askpass)
os.chmod("_askpass.sh", 0o755)

env = os.environ.copy()
env["GIT_ASKPASS"] = os.path.join(os.getcwd(), "_askpass.sh")
# For HTTPS, git asks for username and password separately
env["GIT_USERNAME"] = "hnyctyl-commits"

result = subprocess.run(
    ["git", "push", "-u", "origin", "main"],
    capture_output=True, text=True, timeout=60, env=env
)
print("PUSH stdout:", result.stdout[-300:] if result.stdout else "")
print("PUSH stderr:", result.stderr[-300:] if result.stderr else "")
print("PUSH exit:", result.returncode)

# Cleanup
if os.path.exists("_askpass.sh"):
    os.remove("_askpass.sh")
