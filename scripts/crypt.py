#!/usr/bin/env python3
"""
Encrypt / decrypt post files.

  python3 scripts/crypt.py encrypt          # encrypt all _posts/*.md → assets/enc/*.enc
  python3 scripts/crypt.py decrypt          # decrypt all assets/enc/*.enc → _posts/*.md
  python3 scripts/crypt.py encrypt post.md
  python3 scripts/crypt.py decrypt 2025-08-01-poczatek.enc

Encrypted files live in assets/enc/ and are served as static files by Jekyll.
Decryption happens client-side in the browser (WebCrypto API) — no CI secrets needed.

File format (binary): SALT(16) | NONCE(12) | CIPHERTEXT+TAG
Algorithm: AES-256-GCM, key via PBKDF2-HMAC-SHA256 (600 000 iterations)
"""
import os, sys, getpass
from pathlib import Path

POSTS_DIR   = Path("_posts")
ENC_DIR     = Path("assets/enc")
ITERATIONS  = 600_000

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
    ENC_DIR.mkdir(parents=True, exist_ok=True)
    dst = ENC_DIR / (src.stem + ".enc")   # _posts/foo.md → assets/enc/foo.enc
    dst.write_bytes(salt + nonce + ct)
    print(f"  ✓  {src.name}  →  {dst}")

def decrypt_file(src: Path, password: str):
    _, _, AESGCM = _require_cryptography()
    data = src.read_bytes()
    salt, nonce, ct = data[:16], data[16:28], data[28:]
    key = _derive_key(password, salt)
    try:
        plain = AESGCM(key).decrypt(nonce, ct, None)
    except Exception:
        sys.exit(f"  ✗  Wrong password or corrupted file: {src}")
    POSTS_DIR.mkdir(parents=True, exist_ok=True)
    dst = POSTS_DIR / (src.stem + ".md")   # assets/enc/foo.enc → _posts/foo.md
    dst.write_bytes(plain)
    print(f"  ✓  {src.name}  →  {dst}")

# ── helpers ───────────────────────────────────────────────────────────────────
def _password():
    pw = os.environ.get("POSTS_PASSWORD", "").strip()
    if pw:
        return pw
    pw = getpass.getpass("Posts password: ").strip()
    if not pw:
        sys.exit("Password required.")
    return pw

def _resolve_encrypt(args):
    if args:
        return [Path(a) for a in args]
    files = sorted(POSTS_DIR.glob("*.md"))
    if not files:
        print("No .md files found in _posts/")
    return files

def _resolve_decrypt(args):
    if args:
        return [Path(a) for a in args]
    files = sorted(ENC_DIR.glob("*.enc"))
    if not files:
        print("No .enc files found in assets/enc/")
    return files

# ── commands ──────────────────────────────────────────────────────────────────
def cmd_encrypt(args):
    files = _resolve_encrypt(args)
    if not files:
        return
    pw = _password()
    for f in files:
        if not f.exists():
            print(f"  not found: {f}"); continue
        encrypt_file(f, pw)
    print("\nDone. Commit the .enc files in assets/enc/")

def cmd_decrypt(args):
    files = _resolve_decrypt(args)
    if not files:
        return
    pw = _password()
    for f in files:
        if not f.exists():
            print(f"  not found: {f}"); continue
        decrypt_file(f, pw)
    print("Done. Plain .md files are in _posts/ (gitignored).")

# ── main ──────────────────────────────────────────────────────────────────────
USAGE = """
Commands:
  encrypt [file.md ...]   encrypt _posts/*.md → assets/enc/*.enc
  decrypt [file.enc ...]  decrypt assets/enc/*.enc → _posts/*.md (for local editing)
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
