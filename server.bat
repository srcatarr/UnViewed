:: Server commandline interface for Windows
@echo off

set null=false

if "%1"=="" (
    set null=true
)

if %null%==true (
    echo UnViewed ServerCI v0.0.0.1
    echo Type "help" for more information
    :a
    set cmd=""
    set /p cmd="> "
    if %cmd%==exit (
        exit /b 0
    )
    goto:a
    exit /b 0
)

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
            echo GS_ID=%2
            exit /b 0
        )
    )
)

if %1==compile (
    :: Burası şimdilik dursun
    echo.
    exit /b 0
)

if %1==version (
    echo UnViewed ServerCI version 0.0.0.1
    exit /b 0
)

exit /b 0