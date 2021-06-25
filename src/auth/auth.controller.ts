import { User } from './../../generated_proto/user/user.service_pb';

import {
  LoginPayload,
  LoginResponse,
} from '../../generated_proto/auth/auth.service_pb';
import { AuthService } from './auth.service';
import { Body, Controller, Inject, Post, Get, Param } from '@nestjs/common';

@Controller('/v1/auth')
export class AuthController {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  @Post('/create')
  async login(
    @Body() data: LoginPayload.AsObject,
  ): Promise<LoginResponse.AsObject> {
    return this.authService.login(data);
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<User.AsObject> {
    return this.authService.getOneUser(parseInt(id, 20));
  }

  @Get('/')
  async getAll(
    @Body() data: LoginPayload.AsObject,
  ): Promise<{ users: User.AsObject[] }> {
    return this.authService.getAllUsers(1);
  }
}
