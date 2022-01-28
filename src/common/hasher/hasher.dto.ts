import { IsEmail, IsString } from 'class-validator';

export class HasherDto {
  @IsEmail()
  to: string;
  @IsEmail()
  from: string;
  @IsString()
  subject: string;
  html: any;
}
