import { spawn } from 'child_process';

// Start npm run dev in /vercel/share/v0-project
const dev = spawn('npm', ['run', 'dev'], {
  cwd: '/vercel/share/v0-project',
  stdio: 'inherit',
  shell: true
});

dev.on('error', (error) => {
  console.error('[v0] Failed to start dev server:', error);
  process.exit(1);
});

dev.on('exit', (code) => {
  console.log('[v0] Dev server exited with code', code);
  process.exit(code);
});
