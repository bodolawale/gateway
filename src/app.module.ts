import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import middlewares from './microservices';

@Module({
  imports: [ConfigModule.forRoot(), middlewares],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
