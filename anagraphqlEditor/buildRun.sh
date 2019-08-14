#!/usr/bin/env bash
npm run build
cd ../graphqlTestServer/
npm i
nodemon index.js