import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './UserService';
import { UserController } from './UserController';
import { UserEntity } from 'src/entities/UserEntity';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
    ],
    controllers: [
        UserController,
    ],
    providers: [
        UserService,
    ],
})
export class UserModule { }
