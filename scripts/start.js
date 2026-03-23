import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

console.log('[v0] Starting development server...');
console.log('[v0] Project root:', projectRoot);

try {
  process.chdir(projectRoot);
  execSync('npm run dev', { stdio: 'inherit' });
} catch (error) {
  console.error('[v0] Error starting dev server:', error.message);
  process.exit(1);
}
