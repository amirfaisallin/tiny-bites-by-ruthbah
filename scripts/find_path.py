import os
import sys

print("[v0] Current working directory:", os.getcwd())
print("[v0] __file__ would be:", __file__ if '__file__' in dir() else "not available")
print("[v0] sys.argv[0]:", sys.argv[0])
print("[v0] Files in current dir:")
for f in os.listdir('.')[:20]:
    print(f"  - {f}")

# Try to find package.json
for root, dirs, files in os.walk('/vercel'):
    if 'package.json' in files:
        print(f"[v0] Found package.json at: {root}")
        break
