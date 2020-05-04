#!/bin/bash
set -e

#npm cache clean -f
rm -rf app
rm -rf node_modules
npm install
npm run build
