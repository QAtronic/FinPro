const { spawn } = require('child_process');

console.log('Starting CorpFin Pro...');

// Set environment variables
process.env.NEXTAUTH_SECRET = 'your-secret-key-here-change-in-production';
process.env.NEXTAUTH_URL = 'http://localhost:3000';
process.env.NODE_ENV = 'development';

// Start the development server
const child = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true
});

child.on('error', (error) => {
  console.error('Failed to start project:', error);
});

child.on('close', (code) => {
  console.log(`Project exited with code ${code}`);
});
