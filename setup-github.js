const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 CorpFin Pro - GitHub Setup');
console.log('================================');

async function setupGitHub() {
  try {
    // Step 1: Initialize Git repository
    console.log('\n📁 Step 1: Initializing Git repository...');
    execSync('git init', { stdio: 'inherit' });

    // Step 2: Add all files
    console.log('\n📦 Step 2: Adding all files to Git...');
    execSync('git add .', { stdio: 'inherit' });

    // Step 3: Make initial commit
    console.log('\n💾 Step 3: Making initial commit...');
    execSync('git commit -m "feat: initial commit - CorpFin Pro corporate finance platform"', { stdio: 'inherit' });

    // Step 4: Get repository URL from user
    console.log('\n🌐 Step 4: Setting up remote repository...');
    console.log('\nPlease follow these steps:');
    console.log('1. Go to https://github.com/new');
    console.log('2. Create a new repository named "corpfin-pro"');
    console.log('3. Copy the repository URL (it will look like: https://github.com/yourusername/corpfin-pro.git)');
    console.log('4. Paste it below when prompted\n');

    const repoUrl = await new Promise((resolve) => {
      rl.question('Enter your GitHub repository URL: ', (answer) => {
        resolve(answer.trim());
      });
    });

    // Step 5: Add remote origin
    console.log('\n🔗 Step 5: Adding remote origin...');
    execSync(`git remote add origin ${repoUrl}`, { stdio: 'inherit' });

    // Step 6: Push to GitHub
    console.log('\n⬆️  Step 6: Pushing to GitHub...');
    execSync('git branch -M main', { stdio: 'inherit' });
    execSync('git push -u origin main', { stdio: 'inherit' });

    console.log('\n✅ ========================================');
    console.log('   Setup Complete!');
    console.log('========================================');
    console.log(`\nYour CorpFin Pro project is now on GitHub!`);
    console.log(`Repository URL: ${repoUrl}`);
    console.log('\nNext steps:');
    console.log('1. Visit your repository on GitHub');
    console.log('2. Add a description and topics');
    console.log('3. Enable GitHub Pages if needed');
    console.log('4. Set up GitHub Actions for CI/CD');
    console.log('\n🎉 Enjoy your CorpFin Pro platform!');

  } catch (error) {
    console.error('\n❌ Error during setup:', error.message);
    console.log('\nTroubleshooting:');
    console.log('1. Make sure Git is installed');
    console.log('2. Check your internet connection');
    console.log('3. Verify your GitHub credentials');
    console.log('4. Try running the commands manually');
  } finally {
    rl.close();
  }
}

setupGitHub();
