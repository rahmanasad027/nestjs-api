import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({})
export class AuthModule {
  imports: [PrismaModule];
  controllers: [AuthController];
  providers: [AuthService];
}
