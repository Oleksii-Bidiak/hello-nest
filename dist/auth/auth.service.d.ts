import { UsersService } from "./../users/users.service";
import { CreateUserDto } from "./../users/dto/create-user.dto";
import { JwtService } from "@nestjs/jwt/dist";
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    login(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    registration(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    private generateToken;
    private validateUser;
}
