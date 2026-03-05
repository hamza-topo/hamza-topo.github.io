#!/usr/bin/env bash
set -e

CONTAINER="hamza-portfolio-dev"
APP_PATH="/app"
TMP_BUILD="/tmp/site-build"
PAGES_BRANCH="gh-pages"
MAIN_BRANCH="main"

echo "🚀 Deploying portfolio to GitHub Pages..."

# 1. Ensure we are on main
git checkout $MAIN_BRANCH

# 2. Build inside Docker
echo "📦 Building app inside Docker..."
docker exec -it $CONTAINER sh -lc "cd $APP_PATH && npm ci && npm run build"

# 3. Copy build from container to host
echo "📤 Copying build from container..."
rm -rf $TMP_BUILD
mkdir -p $TMP_BUILD
docker cp $CONTAINER:$APP_PATH/build $TMP_BUILD

# 4. Switch to gh-pages
git checkout $PAGES_BRANCH

# 5. Replace gh-pages content with build output
echo "🧹 Updating gh-pages content..."
rm -rf ./*
cp -r $TMP_BUILD/build/* .
touch .nojekyll

# 6. Commit & force push
git add -A
git commit -m "deploy: github pages"
git push origin $PAGES_BRANCH --force

# 7. Go back to main
git checkout $MAIN_BRANCH

echo "✅ Deployment completed successfully!"
echo "🌍 https://hamza-topo.github.io/me/"
