set -e

VERSION=$(cat version | awk '{$1=$1;print}')

echo "publish version ${VERSION}"

make init
.makefiles/build.sh
make release
.makefiles/publish.sh