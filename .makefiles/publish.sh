echo "publishing www docs blocklet to node server..."
npm install -g @abtnode/cli
npm run build

# deploy to remote ABT Node
if [ "${ALIYUN_ENDPOINT}" != "" ]; then
  abtnode deploy . --endpoint ${ALIYUN_ENDPOINT} --access-key ${ALIYUN_ACCESS_KEY} --access-secret ${ALIYUN_ACCESS_SECRET} --skip-hooks
  echo "deploy to ${ALIYUN_ENDPOINT} success"
fi
if [ "${AWS_ENDPOINT}" != "" ]; then
  abtnode deploy . --endpoint ${AWS_ENDPOINT} --access-key ${AWS_ACCESS_KEY} --access-secret ${AWS_ACCESS_SECRET} --skip-hooks
  echo "deploy to ${ALIYUN_ENDPOINT} success"
fi
