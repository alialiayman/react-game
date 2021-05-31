#!/bin/bash

git_hash=$(git rev-parse --short "$GITHUB_SHA")
sed -i -e '/<title>/i \\t\t<link rel="stylesheet" href="\/index_public.css" \/>' ./public/index.html
sed -i -e "/<\/body>/i   <footer>\n   <p class=\"gitID\">${git_hash}</p>\n   </footer>\n" ./public/index.html