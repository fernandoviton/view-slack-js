#!/bin/bash

rm -rf ./view-slack-darwin-x64/
rm ./view-slack-mac-*.zip 2> /dev/null
electron-packager . -all
version=`cat package.json | grep version | awk '{ print $2 }' | sed s/\"//g | sed s/,//g`
zip -9 -r view-slack-mac-$version.zip ./view-slack-darwin-x64/

