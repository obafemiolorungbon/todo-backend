import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post()
  async createUser(@Body() body: UserDTO): Promise<any> {
    const { email } = body;
    const userExists = await this.userService.findUser(email);

    if (userExists) {
      return {
        status: true,
        message: 'User already exists',
        user: userExists,
      };
    }

    const newUser = await this.userService.createUser(body);

    return {
      status: true,
      message: 'Created New User',
      user: newUser,
    };
  }
}
