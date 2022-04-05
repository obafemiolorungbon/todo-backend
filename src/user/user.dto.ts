import { IsString, IsEmail, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  @ApiProperty({
    description: `The user's email`,
    example: `juan@bookr.co`,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: `The user's googleId`,
    example: '123456789',
  })
  @IsString()
  googleId: string;

  @ApiProperty({
    description: `The user's imageUrl`,
    example: 'htttp://www.google.com/image.png',
  })
  @IsString()
  imageUrl: string;
  @ApiProperty({
    description: `The user's name`,
    example: 'Julian',
  })
  @IsString()
  name: string;
  @ApiProperty({
    description: `The user's createdAt`,
    example: 'Date example',
  })
  @IsDate()
  createdAt: Date;
}
