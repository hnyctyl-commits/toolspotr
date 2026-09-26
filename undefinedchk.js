
const$=id=>document.getElementById(id);
async function key(pw,salt){const km=await crypto.subtle.importKey('raw',new TextEncoder().encode(pw),'PBKDF2',false,['deriveKey']);
  return crypto.subtle.deriveKey({name:'PBKDF2',salt,iterations:250000,hash:'SHA-256'},km,{name:'AES-GCM',length:256},false,['encrypt','decrypt'])}
const b64=b=>btoa(String.fromCharCode(...new Uint8Array(b)));
const ub=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
$('aeEnc').onclick=async()=>{const t=$('aeIn').value,pw=$('aePw').value;
  if(!t||!pw){$('aeOut').textContent='⚠️ Enter both text and a password.';return}
  try{const salt=crypto.getRandomValues(new Uint8Array(16));const iv=crypto.getRandomValues(new Uint8Array(12));
    const k=await key(pw,salt);const ct=await crypto.subtle.encrypt({name:'AES-GCM',iv},k,new TextEncoder().encode(t));
    $('aeOut').textContent='v1:'+b64(salt)+':'+b64(iv)+':'+b64(ct)}
  catch(e){$('aeOut').textContent='❌ Encryption failed: '+e.message}};
$('aeDec').onclick=async()=>{const raw=$('aeIn').value.trim(),pw=$('aePw').value;
  if(!raw||!pw){$('aeOut').textContent='⚠️ Paste ciphertext and the password.';return}
  const p=raw.replace(/^v1:/,'').split(':');
  if(p.length!==3){$('aeOut').textContent='❌ Unrecognised format. Expected v1:salt:iv:data';return}
  try{const k=await key(pw,ub(p[0]));const pt=await crypto.subtle.decrypt({name:'AES-GCM',iv:ub(p[1])},k,ub(p[2]));
    $('aeOut').textContent=new TextDecoder().decode(pt)}
  catch(e){$('aeOut').textContent='❌ Wrong password or corrupted data.'}};
$('aeCopy').onclick=()=>{const b=$('aeCopy');navigator.clipboard.writeText($('aeOut').textContent);b.textContent='✅ Copied';setTimeout(()=>b.textContent='📋 Copy result',1400)};
