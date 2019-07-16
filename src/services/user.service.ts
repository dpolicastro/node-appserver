import { injectable } from 'inversify';
import { IUser } from '../models';

@injectable()
class UserService {

  constructor() { }

  private users: IUser[];

  public getUsers(): IUser[] {
    return this.users;
  }

  public saveUser(user: IUser) {
    this.users.push(user);
    return;
  }
}

export default UserService;
