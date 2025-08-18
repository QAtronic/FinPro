@echo off
echo Starting CorpFin Pro...
echo.

set NEXTAUTH_SECRET=your-secret-key-here-change-in-production
set NEXTAUTH_URL=http://localhost:3000
set NODE_ENV=development

echo Environment variables set.
echo Starting development server...

npm run dev

pause
