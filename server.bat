:: Server commandline interface for Windows
@echo off

echo ServerCI needs NodeJS 

if %1==run  (
    if exist node_modules (
        node src/index.js
    ) else (
        npm install
        node src/index.js
    )
)

if %1==install (
    if "%2"=="" (
        if exist node_modules (
            echo Node modules already installed
        ) else (
            npm install
        )
    ) else (
        if exist node_modules/%2 (
            npm add %2
        ) else (
            echo This module already installed
        )
    )
)

if %1==update (
    npm update
)