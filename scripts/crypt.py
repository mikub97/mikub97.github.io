#!/usr/bin/env python3
"""
Encrypt / decrypt _posts/*.md files.

  python3 scripts/crypt.py encrypt          # encrypt all .md posts → .md.enc
  python3 scripts/crypt.py decrypt          # decrypt all .md.enc posts → .md (used by CI)
  python3 scripts/crypt.py encrypt post.md
  python3 scripts/crypt.py decrypt post.md.enc

Password source (first one found):
  1. POSTS_PASSWORD environment variable  (CI / non-interactive)
  2. Interactive prompt

File format (binary): SALT(16) | NONCE(12) | CIPHERTEXT+TAG
Algorithm: AES-256-GCM, key via PBKDF2-HMAC-SHA256 (600 000 iterations)
"""
import os, sys, getpass
from pathlib import Path

POSTS_DIR  = Path("_posts")
ITERATIONS = 600_000

# ── crypto ────────────────────────────────────────────────────────────────────
def _require_cryptography():
    try:
        from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
        from cryptography.hazmat.primitives import hashes
        from cryptography.hazmat.primitives.ciphers.aead import AESGCM
        return PBKDF2HMAC, hashes, AESGCM
    except ImportError:
        sys.exit("Missing dependency — run:  pip install cryptography")

def _derive_key(password: str, salt: bytes) -> bytes:
    PBKDF2HMAC, hashes, _ = _require_cryptography()
    kdf = PBKDF2HMAC(algorithm=hashes.SHA256(), length=32,
                     salt=salt, iterations=ITERATIONS)
    return kdf.derive(password.encode())

def encrypt_file(src: Path, password: str):
    import secrets as _s
    _, _, AESGCM = _require_cryptography()
    salt  = _s.token_bytes(16)
    nonce = _s.token_bytes(12)
    key   = _derive_key(password, salt)
    ct    = AESGCM(key).encrypt(nonce, src.read_bytes(), None)
    dst   = src.with_suffix(src.suffix + ".enc")
    dst.write_bytes(salt + nonce + ct)
    print(f"  ✓  {src.name}  →  {dst.name}")

def decrypt_file(src: Path, password: str):
    _, _, AESGCM = _require_cryptography()
    data = src.read_bytes()
    salt, nonce, ct = data[:16], data[16:28], data[28:]
    key = _derive_key(password, salt)
    try:
        plain = AESGCM(key).decrypt(nonce, ct, None)
    except Exception:
        sys.exit(f"  ✗  Wrong password or corrupted file: {src}")
    dst = Path(str(src)[:-4])   # strip .enc
    dst.write_bytes(plain)
    print(f"  ✓  {src.name}  →  {dst.name}")

# ── helpers ───────────────────────────────────────────────────────────────────
def _password():
    pw = os.environ.get("POSTS_PASSWORD", "").strip()
    if pw:
        return pw
    pw = getpass.getpass("Posts password: ").strip()
    if not pw:
        sys.exit("Password required.")
    return pw

def _resolve(args, pattern):
    if args:
        return [Path(a) for a in args]
    files = sorted(POSTS_DIR.glob(pattern))
    if not files:
        print(f"No files matching _posts/{pattern}")
    return files

# ── commands ──────────────────────────────────────────────────────────────────
def cmd_encrypt(args):
    files = _resolve(args, "*.md")
    if not files:
        return
    pw = _password()
    for f in files:
        if not f.exists():
            print(f"  not found: {f}"); continue
        if f.suffix != ".md":
            print(f"  skipping (not .md): {f}"); continue
        encrypt_file(f, pw)
    print("\nDone. Commit the .enc files — plain .md files are gitignored.")

def cmd_decrypt(args):
    files = _resolve(args, "*.md.enc")
    if not files:
        return
    pw = _password()
    for f in files:
        if not f.exists():
            print(f"  not found: {f}"); continue
        decrypt_file(f, pw)
    print("Done.")

# ── main ──────────────────────────────────────────────────────────────────────
USAGE = """
Commands:
  encrypt [file.md ...]     encrypt posts (prompts for password)
  decrypt [file.md.enc ...] decrypt posts (used by CI via $POSTS_PASSWORD)
"""

def main():
    cmd  = sys.argv[1] if len(sys.argv) > 1 else ""
    rest = sys.argv[2:]
    if cmd == "encrypt":
        cmd_encrypt(rest)
    elif cmd == "decrypt":
        cmd_decrypt(rest)
    else:
        print(USAGE)

if __name__ == "__main__":
    main()
