if [ "$DEPLOYMENT_GROUP_NAME" == "Staging" ]; then
  docker-compose -f docker-compose.yaml up -d --build
elif [ "$DEPLOYMENT_GROUP_NAME" == "Development" ]; then
  # Copy to /var/www/development
elif [ "$DEPLOYMENT_GROUP_NAME" == "Production" ]; then
  # Copy to /var/www/html
else
  # Fail the deployment
fi
