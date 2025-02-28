#!/bin/bash

# Check if a commit message is provided
if [ -z "$1" ]; then
    echo "Usage: ./gitpush.sh \"commit message\""
    exit 1
fi

# Run Git commands
git add .
git commit -m "$1"
git push

echo "Changes pushed successfully!"
