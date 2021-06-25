import { User } from './../../generated_proto/user/user.service_pb';
import {
  LoginPayload,
  LoginResponse,
} from '../../generated_proto/auth/auth.service_pb';
import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  private readonly authSvc;
  private readonly userSvc;

  constructor(
    @Inject('AUTH_SVC') private authClient: ClientGrpc,
    @Inject('USER_SVC') private userClient: ClientGrpc,
  ) {
    this.authSvc = authClient.getService('AuthService');
    this.userSvc = userClient.getService('UserService');
  }

  async login(data: LoginPayload.AsObject): Promise<LoginResponse.AsObject> {
    return this.authSvc.login(data);
  }

  async getOneUser(id: number): Promise<User.AsObject> {
    return this.userSvc.getOneUser({ id });
  }

  async getAllUsers(id: number): Promise<{ users: User.AsObject[] }> {
    return this.userSvc.getAllUsers({ id }).toPromise();
  }
}
