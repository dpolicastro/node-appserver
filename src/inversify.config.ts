import { Container } from 'inversify';
import TYPES from './constant/types';

// Importing controllers with @controller decorator
import './controllers/healthcheck.controller';
import './controllers/user.controller';
import './controllers/templates.controller';

// Services
import UserService from './services/user.service';

// set up container
const container = new Container();

// set up bindings
container.bind<UserService>(TYPES.UserService).to(UserService);

export default container;
