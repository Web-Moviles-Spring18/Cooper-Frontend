#!/usr/bin/env sh
set -x

export NODE_ENV=production
export PORT=80
export NVM_BIN=$HOME/.nvm/versions/node/v6.9.0/bin

cd $1 && \
tar zxvf package.tgz -C . && \
mv dist/package.json .
