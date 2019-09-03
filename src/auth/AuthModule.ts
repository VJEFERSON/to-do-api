import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './AuthController';
import { UserEntity } from 'src/entities/UserEntity';
import { AuthService } from './AuthService';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
        JwtModule.register({ secret: 'hard!to-guess_secret' })
    ],
    controllers: [
        AuthController,
    ],
    providers: [
        AuthService,
    ],
})
export class AuthModule { }
