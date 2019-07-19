echo "Starting buiding container for env: $DEPLOYMENT_GROUP_NAME"
if [ "$DEPLOYMENT_GROUP_NAME" == "Staging" ]; then
  docker-compose -f ../docker-compose.yaml up -d --build
elif [ "$DEPLOYMENT_GROUP_NAME" == "Development" ]; then
  echo "Development"
fi
