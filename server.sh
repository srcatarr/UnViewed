# Server Commandline Interface for Linux

#!/bin/bash

if ["$1" == ""]; then
    echo UnViewed ServerCI v0.0.0.1 Copyright C 2023 Yasir Eymen KAYABAŞI
    echo Type "help" for more information
    exit -b 0
fi

if ["$1" == "-install"]; then
    if ["$2" == ""]; then
        if [-e node_modules]; then
            echo Node modules already installed
            exit -b 0
        else
            npm install
            exit -b 0
        fi
    else
        if [-e node_modules/$2]; then
            echo This module already installed
            exit -b 0
        else
            npm add $2
            exit -b 0
        fi
    fi
fi # Buralarda else kullan