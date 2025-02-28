@echo off
REM Check if a commit message is provided
IF "%~1"=="" (
    echo Usage: gitpush.bat "commit message"
    exit /b 1
)

REM Run Git commands
git add .
git commit -m "%~1"
git push

echo Changes pushed successfully!
