import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, NextFunction, Response } from 'express';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { BadRequestException } from '@nestjs/common';
import { TextDTO } from '../text.dto';

@Injectable()
export class TextValidation implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    if (body?.accountType === 'Business') {
      const object = plainToInstance(TextDTO, body);
      const errors = await validate(object);
      if (errors.length > 0) {
        throw new BadRequestException('User Input Validation Failed!');
      }
      next();
      return;
    }
  }
}
