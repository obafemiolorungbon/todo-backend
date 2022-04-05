import { Todo, TodoSchema } from './factory/todo.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ConflictException, Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

import { Document } from 'mongoose';
@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Todo.name,
        useFactory: () => {
          const schema: typeof TodoSchema = TodoSchema;
          schema.post('save', function (error, doc: Document, next) {
            if (error.name === 'MongoServerError' && error.code === 11000) {
              next(new ConflictException('Todo Already Exist'));
            } else {
              next();
            }
          });
          return schema;
        },
      },
    ]),
  ],
  controllers: [TodoController],
  providers: [TodoService],
  exports: [TodoService],
})
export class TextModule {}
