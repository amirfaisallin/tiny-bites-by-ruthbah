import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

console.log('[v0] Starting development server...');
console.log('[v0] Project root:', projectRoot);

// Verify package.json exists
if (!fs.existsSync(path.join(projectRoot, 'package.json'))) {
  console.error('[v0] Error: package.json not found in', projectRoot);
  process.exit(1);
}

try {
  // Change to project directory
  process.chdir(projectRoot);
  console.log('[v0] Current directory:', process.cwd());
  
  // Install dependencies if needed
  if (!fs.existsSync(path.join(projectRoot, 'node_modules'))) {
    console.log('[v0] Installing dependencies...');
    execSync('npm install', { stdio: 'inherit' });
  }
  
  // Start dev server
  console.log('[v0] Starting npm run dev...');
  execSync('npm run dev', { stdio: 'inherit' });
} catch (error) {
  console.error('[v0] Error starting dev server:', error.message);
  process.exit(1);
}
