#!/bin/bash
FILE=/home/ubuntu/app/index.sh
if test -f "$FILE";then
    echo "file exists"
    cd /home/ubuntu
    pm2 stop --silent index.js
    pm2 delete index.js
    killall -9 node
else
    echo "$FILE does not exits"
fi 
cd /home/ubuntu/
sudo rm -rf app
sudo mkdir app