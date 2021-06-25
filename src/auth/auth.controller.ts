import {
  LoginPayload,
  LoginResponse,
} from '../../generated_proto/auth/auth.service_pb';
import { AuthService } from './auth.service';
import { Body, Controller, Inject, Post } from '@nestjs/common';

@Controller('/v1/auth')
export class AuthController {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  @Post('/login')
  async login(
    @Body() data: LoginPayload.AsObject,
  ): Promise<LoginResponse.AsObject> {
    return this.authService.login(data);
  }
}
