import { User, UserDocument } from './factory/user.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(payload: User): Promise<User> {
    const createdUser = new this.userModel(payload);
    return createdUser.save();
  }

  async findUser(id: string): Promise<User> {
    return this.userModel.findOne({ email: id });
  }
}
