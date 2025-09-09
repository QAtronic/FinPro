Write-Host "Starting StaffBoard HR Platform..." -ForegroundColor Green
Write-Host "Current directory: $(Get-Location)" -ForegroundColor Yellow
Write-Host "Checking Node.js installation..." -ForegroundColor Yellow

# Check if Node.js is installed
if (Test-Path "C:\Program Files\nodejs\node.exe") {
    Write-Host "Node.js found at C:\Program Files\nodejs\node.exe" -ForegroundColor Green
    $env:PATH += ";C:\Program Files\nodejs"
} elseif (Test-Path "C:\Program Files (x86)\nodejs\node.exe") {
    Write-Host "Node.js found at C:\Program Files (x86)\nodejs\node.exe" -ForegroundColor Green
    $env:PATH += ";C:\Program Files (x86)\nodejs"
} else {
    Write-Host "Node.js not found in standard locations" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org/" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

# Check if package.json exists
if (Test-Path "package.json") {
    Write-Host "package.json found" -ForegroundColor Green
} else {
    Write-Host "package.json not found" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

# Install dependencies if node_modules doesn't exist
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    & "C:\Program Files\nodejs\npm.cmd" install
}

# Start the development server
Write-Host "Starting development server..." -ForegroundColor Green
& "C:\Program Files\nodejs\npm.cmd" run dev
