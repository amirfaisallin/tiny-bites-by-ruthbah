#!/usr/bin/env python3
import subprocess
import os
import sys

# Set the working directory to the project root
project_root = '/vercel/share/v0-project'
os.chdir(project_root)

print(f'[v0] Starting dev server at {project_root}')
print(f'[v0] Current directory: {os.getcwd()}')

# Check if node_modules exists
if not os.path.exists(os.path.join(project_root, 'node_modules')):
    print('[v0] Installing dependencies...')
    result = subprocess.run(['npm', 'install'], cwd=project_root)
    if result.returncode != 0:
        print('[v0] Failed to install dependencies')
        sys.exit(1)

# Start the dev server
print('[v0] Starting Next.js development server...')
try:
    result = subprocess.run(['npm', 'run', 'dev'], cwd=project_root)
    sys.exit(result.returncode)
except Exception as e:
    print(f'[v0] Error: {e}')
    sys.exit(1)
