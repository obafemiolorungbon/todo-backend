import { User, UserSchema } from './factory/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ConflictException, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

import { Document } from 'mongoose';
@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          const schema: typeof UserSchema = UserSchema;
          schema.post('save', function (error, doc: Document, next) {
            if (error.name === 'MongoServerError' && error.code === 11000) {
              next(new ConflictException('User Already Exist'));
            } else {
              next();
            }
          });
          return schema;
        },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
