#!/usr/bin/env sh

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'Update to gh-pages'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:boldak/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/wolfzex/db_labs master:gh-pages

cd -

read -p "Press any key to continue" x