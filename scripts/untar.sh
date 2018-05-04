#!/usr/bin/env sh
set -x

export NODE_ENV=production
export HOST=https://localhost:4443
export PORT=80
export NVM_BIN=$HOME/.nvm/versions/node/v6.9.0/bin

cd $1 && \
tar zxvf package.tgz -C . && \
mv dist/package.json . && \
npm install && \
pm2 delete front 2> /dev/null && \
pm2 --name front start npm -- start
