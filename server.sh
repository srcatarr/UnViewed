#!/bin/bash

null=false

if [ -z "$1" ]; then
    null=true
fi

if [ "$null" == true ]; then
    echo "UnViewed ServerCI v0.0.0.1 Copyright C 2023 Yasir Eymen KAYABASI"
    echo "Type 'help' for more information"
    exit 0
fi

if [ "$1" == "--run" ]; then
    if [ -d "node_modules" ]; then
        node src/index.js
        exit 0
    else
        npm install
        node src/index.js
        exit 0
    fi
elif [ "$1" == "--install" ]; then
    if [ -z "$2" ]; then
        if [ -d "node_modules" ]; then
            echo "Node modules already installed"
            exit 0
        else
            npm install
            exit 0
        fi
    else
        if [ -e "node_modules/$2" ]; then
            echo "This module already installed"
            exit 0
        else
            npm add "$2"
            exit 0
        fi
    fi
elif [ "$1" == "--update" ]; then
    npm update
    echo "Updated to the latest version"
    exit 0
elif [ "$1" == "--login" ]; then
    if [ -z "$2" ]; then
        echo "Please enter Google Apps Script Project ID"
    else
        echo "Trying login"
        if [ -e ".env" ]; then
            echo "You already logged in"
            exit 0
        else
            echo "Logging in"
            echo "# Google Apps Script Project ID" > .env
            echo "GS_ID=$2" >> .env
            echo "# Application PORT" >> .env
            echo "PORT=3000" >> .env
            exit 0
        fi
    fi
elif [ "$1" == "--compile" ]; then
    cd src/ts || exit
    npx tsc
    cd ../..
elif [ "$1" == "--decompile" ]; then
    cd src/ts || exit
    rm -f db.js
    echo "Codes decompiled"
    cd ../..
elif [ "$1" == "--version" ]; then
    echo "UnViewed ServerCI Version 0.0.0.1"
    exit 0
elif [ "$1" == "--help" ]; then
    echo "ServerCI: The Commandline Interface For UnViewed Server - Version 0.0.0.1"
    echo ""
    echo "COMMANDS"
    echo ""
    echo "    --help        More information about ServerCI."
    echo "    --version     Learn version."
    echo "    --install     Install packages."
    echo "    --run         Run server in localhost."
    echo "    --update      Update NodeJS and ServerCI."
    echo "    --login       Login to Google Apps Script."
    echo "    --compile     Compile codes to run."
    echo "    --decompile   Decompile codes to run."
else
    echo "An error occurred: This command not found"
fi

exit 0
