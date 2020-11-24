#!/bin/bash
mv ./dist/projects/cellularautomaton.html ./dist/projects/automatecellulaire.html
mv ./dist/projects/myportfolio.html ./dist/projects/monportfolio.html

mkdir -p ./dist/fr/projets
mv ./dist/projects/* ./dist/fr/projets/
rm -rf ./dist/projects
cp ./dist/index.html ./dist/fr/index.html