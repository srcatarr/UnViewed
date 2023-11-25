:: Server commandline interface for Windows
@echo off

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
            echo This module already installed
        ) else (
            npm add %2
        )
    )
)

if %1==update (
    npm update
)

if %1==version (
    echo UnViewed ServerCI version 0.0.0.1
)

if "%1"=="" (
    echo ServerCI v0.0.0.1
    set /p cmd=
    if %cmd%==run (
        if exist node_modules (
            node src/index.js
        ) else (
            npm install
            node src/index.js
        )
    )
    if %cmd%==install ()
)