# Server commandline interface for Linux
# Ama linux shell kullanmayı doğru düzgün bilmiyorum 
# bu yüzden burayı arkadaşıma yazdıracağım

#!/bin/bash

echo "ServerCI needs NodeJS"

if ["$1" == ""]; then
    # Utku'ya bırakıyorum
fi

if ["$1" == "run"]; then
    if [-d "node_modules"]; then
        node src/index.js
    else
        npm install
        node src/index.js
    fi
fi

if ["$1" == "install"]; then
    if ["$2" == ""]; then
        if [-z "node_modules"]; then
        fi
    else
        if [-z "node_modules/$2"]; then
            echo This module already installed
        else
            npm add $2
fi

if ["$1" == "update"]; then
    npm update
fi