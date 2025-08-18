@echo off
title CorpFin Pro - GitHub Setup
color 0A

echo.
echo ========================================
echo    CorpFin Pro - GitHub Setup
echo ========================================
echo.

echo Step 1: Initializing Git repository...
git init

echo.
echo Step 2: Adding all files to Git...
git add .

echo.
echo Step 3: Making initial commit...
git commit -m "feat: initial commit - CorpFin Pro corporate finance platform"

echo.
echo Step 4: Setting up remote repository...
echo.
echo Please follow these steps:
echo 1. Go to https://github.com/new
echo 2. Create a new repository named "corpfin-pro"
echo 3. Copy the repository URL (it will look like: https://github.com/yourusername/corpfin-pro.git)
echo 4. Paste it below when prompted
echo.

set /p repo_url="Enter your GitHub repository URL: "

echo.
echo Step 5: Adding remote origin...
git remote add origin %repo_url%

echo.
echo Step 6: Pushing to GitHub...
git branch -M main
git push -u origin main

echo.
echo ========================================
echo    Setup Complete!
echo ========================================
echo.
echo Your CorpFin Pro project is now on GitHub!
echo Repository URL: %repo_url%
echo.
echo Next steps:
echo 1. Visit your repository on GitHub
echo 2. Add a description and topics
echo 3. Enable GitHub Pages if needed
echo 4. Set up GitHub Actions for CI/CD
echo.
pause
