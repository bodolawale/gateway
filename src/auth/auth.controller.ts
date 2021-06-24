import {
  LoginPayload,
  LoginResponse,
} from './../../generated_proto/auth/auth_pb.d';
import { AuthService } from './auth.service';
import { Controller, Inject, Post } from '@nestjs/common';

@Controller('/v1/auth')
export class AuthController {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  @Post('/login')
  async login(data: LoginPayload.AsObject): Promise<LoginResponse.AsObject> {
    return this.authService.login(data);
  }
}
