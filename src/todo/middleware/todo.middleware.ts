import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, NextFunction, Response } from 'express';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { BadRequestException } from '@nestjs/common';
import { TodoDTO } from '../todo.dto';

@Injectable()
export class TodoValidation implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    if (body.title) {
      const object = plainToInstance(TodoDTO, body);
      const errors = await validate(object);
      if (errors.length > 0) {
        throw new BadRequestException('User Input Validation Failed!');
      }
      next();
      return;
    }
  }
}
