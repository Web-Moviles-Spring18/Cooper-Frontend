#!/usr/bin/env sh
set -x

cp package.json dist/ && \
tar -czf package.tgz dist/ && \
scp package.tgz $REMOTE_USER@$REMOTE_HOST:$REMOTE_APP_DIR && \
ssh $REMOTE_USER@$REMOTE_HOST 'bash -s' < ./scripts/untar.sh $REMOTE_APP_DIR
