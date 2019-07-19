export APP_FOLDER=/app
echo "Starting buiding container for env: $DEPLOYMENT_GROUP_NAME"
if [ "$DEPLOYMENT_GROUP_NAME" == "Staging" ]; then
  ls
  docker-compose -f "$APP_FOLDER/docker-compose.yaml" up -d --build
elif [ "$DEPLOYMENT_GROUP_NAME" == "Development" ]; then
  echo "Development"
fi
