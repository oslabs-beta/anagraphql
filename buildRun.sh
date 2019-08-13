#!/usr/bin/env bash
cd ./anagraphqlEditor/
npm run build
cd ../graphqlTestServer/
npm i
nodemon index.js