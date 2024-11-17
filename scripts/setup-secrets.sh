#!/bin/bash

# - encrypt a file
#	> gpg -a -e -u '<user>' -r '<user>' <file>
# 1. REQUIRED: create file 'passfile.txt'
# 2. put gpg password in passfile.txt
# 3. run this scripts

gpg -d --passphrase-fd passfile.txt --output .env .env.asc
cd ..

cd frontend
gpg -d --passphrase-fd ../scripts/passfile.txt --output .env .env.asc
gpg -d --passphrase-fd ../scripts/passfile.txt --output .env.production .env.production.asc

cd ..

cd backend
gpg -d --passphrase-fd ../scripts/passfile.txt --output .env .env.asc
gpg -d --passphrase-fd ../scripts/passfile.txt --output .env.production .env.production.asc
