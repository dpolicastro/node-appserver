import {
  controller, httpGet, request, response, httpPost
} from 'inversify-express-utils';
import * as express from 'express';
import TYPES from '../constant/types';
import { inject } from 'inversify';
import UserService from '../services/user.service';

@controller('/users')
export class UserController {

  constructor(@inject(TYPES.UserService) private userService: UserService) { }

  @httpGet("/")
  private async get(@request() req: express.Request, @response() res: express.Response) {
    try {
      const users = await this.userService.getUsers();
      return res.status(200).json({ status: 'success', data: users });

    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  @httpPost("/")
  private async post(@request() req: express.Request, @response() res: express.Response) {
    try {
      const { id, name } = req.body;
      const user = { id, name }
      this.userService.saveUser(user);

      return res.status(201).json({ status: 'success' });

    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

export default UserController;
