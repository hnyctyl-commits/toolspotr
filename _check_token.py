
import urllib.request, json, sys

# Read token from arg
token = sys.argv[1]

req = urllib.request.Request(
    "https://api.github.com/user",
    headers={"Authorization": f"Bearer {token}", "User-Agent": "Toolflow/1.0"}
)
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        data = json.loads(resp.read())
        scopes = resp.headers.get("X-OAuth-Scopes", "none")
        print(f"OK|{data.get('login')}|{scopes}")
except Exception as e:
    print(f"FAIL|{e}")
