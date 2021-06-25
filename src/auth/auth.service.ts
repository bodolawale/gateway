import {
  LoginPayload,
  LoginResponse,
} from '../../generated_proto/auth/auth_pb';
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
}
