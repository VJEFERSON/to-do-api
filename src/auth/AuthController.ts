import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './AuthService';
import { AuthDto } from './dtos/AuthDto';
import { AuthUser } from './dtos/AuthUser';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {
    }

    @Post('login')
    authenticationUser(@Body() authUser: AuthUser){
        return this.authService.authenticationUser(authUser);
    }

}
