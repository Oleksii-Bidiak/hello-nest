import { RolesService } from "./../roles/roles.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./users.model";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private rolesService: RolesService
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.rolesService.getRoleByValue("USER");
    await user.$set("roles", [role.id]);
    user.roles = [role];
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async getUserByEmain(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });

    return user;
  }
}
