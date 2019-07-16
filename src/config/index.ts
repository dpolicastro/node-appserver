if (!process.env.NODE_ENV) {
  throw Error('Error: environment variable `NODE_ENV` not set.')
}

const getEnvironment = () => {

  const environment = process.env.NODE_ENV;
  console.log('#'.repeat(50))
  console.log('Starting application...')
  console.log('ENVIRONMENT: ', environment)

  switch (environment) {

    case 'production':
      const dotenv = require('dotenv');
      dotenv.config();
      break;

    default:
      require('./env.dev');
      break;
  }
}



getEnvironment();
