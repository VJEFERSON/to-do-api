import { Injectable } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { map } from 'rxjs/operators';
import _ = require('lodash');
import { CreateUserDto } from './dtos/CreateUserDto';
import { UserDto } from './dtos/UserDto';
import { UserEntity } from 'src/entities/UserEntity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>) {

    }

    public findAll(): Observable<UserEntity[]> {
        return from(this.userRepository.find())
        .pipe(
            map((users) => _.orderBy(users, ['id'], ['desc'])));
    }

    public create(createUserDto: CreateUserDto): Promise<UserDto> {
        return this.userRepository.save(createUserDto);
    }

}
