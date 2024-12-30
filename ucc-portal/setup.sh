#!/bin/bash

# Create directory structure
mkdir -p client/src/pages
mkdir -p client/src/components/ui

# Create essential files
echo "Setting up project files..."

# Create package.json (we'll use npm init later)
touch package.json

# Create React components directories
mkdir -p client/src/lib
mkdir -p client/src/hooks

echo "Project structure created successfully!"
echo "Next steps:"
echo "1. Run: npm install"
echo "2. Initialize git: git init"
echo "3. Add files: git add ."
echo "4. Commit: git commit -m 'Initial commit'"
