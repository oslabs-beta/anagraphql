#!/usr/bin/env bash

echo "Configuring database"

export PGPASSWORD='node_password'

#
# Should grab your username
#
dropdb -U $USER anagraph_db
createdb -U $USER anagraph_db;
psql -U $USER anagraph_db < ./config/db.sql

echo "Ana-graphql was configered";

node ./config/asyncFakeData.js

echo "I am done I think!! :)";