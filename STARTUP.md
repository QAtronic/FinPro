# CorpFin Pro - Startup Instructions

## Quick Start

### Option 1: Using Command Prompt (Recommended)
1. Open Command Prompt (cmd) as Administrator
2. Navigate to the project directory:
   ```
   cd C:\corpfin-pro
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

### Option 2: Using Batch File
1. Double-click `start.bat` in the project directory
2. The batch file will set environment variables and start the server

### Option 3: Using PowerShell (if working)
1. Open PowerShell as Administrator
2. Navigate to the project directory:
   ```
   cd C:\corpfin-pro
   ```
3. Run:
   ```
   npm run dev
   ```

## Environment Variables

The following environment variables are required:

```env
NEXTAUTH_SECRET=your-secret-key-here-change-in-production
NEXTAUTH_URL=http://localhost:3000
NODE_ENV=development
DATABASE_URL=file:./dev.db
```

## Demo Credentials

Use these credentials to sign in:

- **Admin User:**
  - Email: `admin@corpfin.pro`
  - Password: `Admin123!`

- **Analyst User:**
  - Email: `analyst@corpfin.pro`
  - Password: `Analyst123!`

- **Controller User:**
  - Email: `controller@corpfin.pro`
  - Password: `Controller123!`

## Troubleshooting

### If npm commands don't work:
1. Make sure Node.js is installed (version 18 or higher)
2. Try using Command Prompt instead of PowerShell
3. Check if the project directory is correct

### If the server won't start:
1. Check if port 3000 is available
2. Make sure all dependencies are installed
3. Check the console for error messages

### If you see encoding issues:
1. Use Command Prompt instead of PowerShell
2. Make sure your terminal supports UTF-8

## Features

- ✅ Dark theme with blue/purple background
- ✅ White text for excellent readability
- ✅ Responsive design
- ✅ Professional financial dashboard
- ✅ User authentication
- ✅ Multi-role support (CFO, Controller, Analyst)
- ✅ Financial planning and reporting
- ✅ Entity management
- ✅ Chart of accounts
- ✅ Data import/export
- ✅ Approval workflows

## Access the Application

Once the server is running, open your browser and go to:
```
http://localhost:3000
```

The application will redirect you to the sign-in page where you can use the demo credentials above.
