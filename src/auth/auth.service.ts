import {
  LoginPayload,
  LoginResponse,
} from './../../generated_proto/auth/auth_pb.d';
import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  private readonly authSvc;

  constructor(@Inject('AUTH_SVC') private client: ClientGrpc) {
    this.authSvc = client.getService('AuthService');
  }

  async login(data: LoginPayload.AsObject): Promise<LoginResponse.AsObject> {
    return this.authSvc.login(data);
  }
}
