Remove-Item .\view-slack-win32-x64 -Force -Recurse -erroraction 'silentlycontinue'
Remove-Item view-slack-win-*.zip
electron-packager . -all
$json = Get-Content -Raw -Path ./package.json | ConvertFrom-Json
Compress-Archive -Path ./view-slack-win32-x64 -DestinationPath "view-slack-win-$($json.version).zip"