#!/bin/bash

# Start the MongoDB service in the background
mongod &

# Wait for the MongoDB service to start
sleep 10

# Connect to the MongoDB server and create a database and collection
mongo <<EOF
use mydb
db.createCollection("mycollection")
db.mycollection.insert({ name: "John", age: 30 })
db.mycollection.insert({ name: "Jane", age: 25 })
EOF

# Stop the MongoDB service
mongod --shutdown

# Keep the container running
tail -f /dev/null
