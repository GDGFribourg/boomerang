#!/bin/bash

mkdir public
rsync -a --delete \
  --exclude node_modules \
  ./ public/

./node_modules/firebase-tools/bin/firebase deploy --token "$FIREBASE_TOKEN"