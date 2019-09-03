import { Controller, Get, Post, Body, Put, Delete, Param} from '@nestjs/common';
import { Observable } from 'rxjs';
import { CreateUserDto } from './dtos/CreateUserDto';
import { UserDto } from './dtos/UserDto';
import { UserEntity } from 'src/entities/UserEntity';
import { UserService } from './UserService';

@Controller('users')
export class UserController {

    constructor(private userService: UserService) {
    }

    @Get()
    findAll(): Observable<UserEntity[]> {
        return this.userService.findAll();
    }

}
