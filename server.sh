# Server commandline interface for Linux
# Ama linux shell kullanmayı doğru düzgün bilmiyorum 
# bu yüzden burayı arkadaşıma yazdıracağım

#!/bin/bash

echo "ServerCI needs NodeJS"

if ["$1" == "run"]; then
    if [-d "node_modules"]; then
        node src/index.js
    else
        npm install
        node src/index.js
    fi
fi