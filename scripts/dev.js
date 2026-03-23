import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

console.log('[v0] Starting dev server at', projectRoot);

// Try to start next dev directly
const dev = spawn('node', [
  path.join(projectRoot, 'node_modules', '.bin', 'next'),
  'dev'
], {
  cwd: projectRoot,
  stdio: 'inherit'
});

dev.on('error', (error) => {
  console.error('[v0] Failed to start dev server:', error.message);
  process.exit(1);
});

dev.on('exit', (code) => {
  console.log('[v0] Dev server exited with code', code);
  process.exit(code);
});
