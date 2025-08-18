@echo off
title CorpFin Pro - Development Server
color 0A

echo.
echo ========================================
echo    CorpFin Pro - Development Server
echo ========================================
echo.

echo Setting environment variables...
set NEXTAUTH_SECRET=your-secret-key-here-change-in-production
set NEXTAUTH_URL=http://localhost:3000
set NODE_ENV=development

echo.
echo Starting development server...
echo.
echo The application will be available at:
echo http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

npm run dev

pause
