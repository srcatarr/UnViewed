:: Server commandline interface for Windows
@echo off

if %1==run  (
    if exist node_modules (
        node src/index.js
        exit /b 0
    ) else (
        npm install
        node src/index.js
        exit /b 0
    )
)

if %1==install (
    if "%2"=="" (
        if exist node_modules (
            echo Node modules already installed
            exit /b 0
        ) else (
            npm install
            exit /b 0
        )
    ) else (
        if exist node_modules/%2 (
            echo This module already installed
            exit /b 0
        ) else (
            npm add %2
            exit /b 0
        )
    )
)

if %1==update (
    npm update
    echo Updated to latest version
    exit /b 0
)

if %1==login (
    if "%2"=="" (
        echo Please enter Google Apps Script Project ID
    ) else (
        echo Trying login
        if exist .env (
            echo You already logged in
            exit /b 0
        ) else (
            echo Logging in
            echo # Google Apps Script Project ID>>.env
            echo GS_ID=%anan%
            exit /b 0
        )
    )
)

if %1==compile (
    :: Burası şimdilik dursun
    echo.
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
)