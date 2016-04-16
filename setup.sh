#!/bin/bash

# 1. Download NVM
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash

# 2. Install node using nvm
source ~/.nvm/nvm.sh
nvm install stable
nvm alias default stable
nvm use stable




