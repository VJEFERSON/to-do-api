import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import _ = require('lodash');
import { UserEntity } from 'src/entities/UserEntity';
import { JwtService } from '@nestjs/jwt';
import { AuthUser } from './dtos/AuthUser';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
                private readonly jwtService: JwtService) {
    }

    public authenticationUser(authUser: AuthUser) {
        const emailAuth = authUser.email;
        const passwordAuth = authUser.password;
        const user = this.userRepository.findOne( {where: {email: emailAuth, password: passwordAuth}} );
        if (!user) {
            throw new HttpException('Invalid email/Password!', HttpStatus.BAD_REQUEST);
        }

    }

}
