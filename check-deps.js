const fs = require('fs');
const path = require('path');

console.log('Checking CorpFin Pro dependencies...\n');

// Check if package.json exists
if (!fs.existsSync('package.json')) {
  console.error('❌ package.json not found');
  process.exit(1);
}

// Check if node_modules exists
if (!fs.existsSync('node_modules')) {
  console.error('❌ node_modules not found. Run npm install first.');
  process.exit(1);
}

// Check if .next exists
if (!fs.existsSync('.next')) {
  console.log('⚠️  .next directory not found. This is normal for first run.');
}

// Check if .env exists
if (!fs.existsSync('.env') && !fs.existsSync('.env.local')) {
  console.log('⚠️  .env file not found. Creating basic environment variables...');
  
  const envContent = `NEXTAUTH_SECRET=your-secret-key-here-change-in-production
NEXTAUTH_URL=http://localhost:3000
NODE_ENV=development
DATABASE_URL=file:./dev.db`;
  
  fs.writeFileSync('.env', envContent);
  console.log('✅ Created .env file');
}

// Check required directories
const requiredDirs = ['app', 'components', 'lib'];
for (const dir of requiredDirs) {
  if (!fs.existsSync(dir)) {
    console.error(`❌ Required directory ${dir} not found`);
    process.exit(1);
  }
}

// Check required files
const requiredFiles = [
  'app/layout.tsx',
  'app/page.tsx',
  'components/ui/card.tsx',
  'lib/utils.ts'
];

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    console.error(`❌ Required file ${file} not found`);
    process.exit(1);
  }
}

console.log('✅ All dependencies and files are present');
console.log('✅ Project structure is valid');
console.log('\nYou can now run: npm run dev');
