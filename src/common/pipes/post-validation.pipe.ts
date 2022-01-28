import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class GlobalValidationPipe implements PipeTransform {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    //convert incoming plain POST data to typed object
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException('User Input Validation Failed!');
    }
    return value;
  }
}
