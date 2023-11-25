:: Server Commandline Interface for Windows
:: Example using; server -run
:: "server" calling server.bat and %1 is "-run"

@echo off && rem #!/bin/bash 

:: Buradan itibaren 1. parametre boş ise olacakları yapıyor
set null=false

if "%1"=="" (
    set null=true
)

if %null%==true (
    echo UnViewed ServerCI v0.0.0.1 Copyright C 2023  Yasir Eymen KAYABASI
    echo Type "-help" for more information
    exit /b 0 && rem Bu "exit /b 0" kavrammı Bash'de "exit 0" anlamına geliyor
)
:: Boş ise yapılacaklar burada bitiyor

if %1==--run  (
    if exist node_modules (
        node src/index.js
        exit /b 0
    ) else (
        npm install
        node src/index.js
        exit /b 0
    )
) else if %1==--install (
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
) else if %1==--update (
    npm update
    echo Updated to latest version
    exit /b 0
) else if %1==-login (
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
            echo GS_ID=%2>>.env
            echo # Application PORT>>.env
            echo PORT=3000>>.env
            exit /b 0
        )
    )
) else if %1==--compile (
    cd src/ts
    npx tsc
    cd ..
    cd ..
) else if %1==--decompile (
    cd src/ts
    del db.js
    echo Codes decompiled
    cd ..
    cd ..
) else if %1==--version (
    echo UnViewed ServerCI Version 0.0.0.1
    exit /b 0
) else if %1==--help (
    echo ServerCI: The Commandline Interface For UnViewed Server - Version 0.0.0.1
    echo.
    echo COMMANDS
    echo.
    echo    --help        More information about ServerCI.
    echo    --version     Learn version.
    echo    --install     Install packages.
    echo    --run         Run server in localhost.
    echo    --update      Update NodeJS and ServerCI.
    echo    --login       Login to Google Apps Script.
    echo    --compile     Compile codes to run.
    echo    --decompile   Decompile codes to run.
) else (
    echo An error occurred: This command not found
)

exit /b 0