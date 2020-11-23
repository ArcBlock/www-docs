echo "publishing www docs blocklet to node server..."

yarn
sudo npm install -g @abtnode/cli
npm run build
abtnode bundle --create-release

# deploy to remote ABT Node
if [ "${ALIYUN_NODE_ENDPOINT}" != "" ]; then
  abtnode deploy .blocklet/bundle --endpoint ${ALIYUN_NODE_ENDPOINT} --access-key ${ALIYUN_NODE_ACCESS_KEY} --access-secret ${ALIYUN_NODE_ACCESS_SECRET} --skip-hooks
  echo "deploy to ${ALIYUN_NODE_ENDPOINT} success"
fi
if [ "${AWS_NODE_ENDPOINT}" != "" ]; then
  abtnode deploy .blocklet/bundle --endpoint ${AWS_NODE_ENDPOINT} --access-key ${AWS_NODE_ACCESS_KEY} --access-secret ${AWS_NODE_ACCESS_SECRET} --skip-hooks
  echo "deploy to ${AWS_NODE_ENDPOINT} success"
fi
