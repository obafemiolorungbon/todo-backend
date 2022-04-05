import { IsString, IsDate, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TodoDTO {
  @ApiProperty({
    description: `The title of the todo`,
    example: 'Clean',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: `email of the creator of the todo`,
    example: 'abc@gmail.com',
  })
  @IsEmail()
  creator: string;

  @ApiProperty({
    description: `Status of the todo`,
    example: 'created',
  })
  @IsString()
  status: string;
  @ApiProperty({
    description: `Note attached to the todo`,
    example: 'You are supposed to clean the house. But wash the dishes first.',
  })
  @IsString()
  note: string;
  @ApiProperty({
    description: `Date Created`,
    example: 'Date example',
  })
  @IsDate()
  createdAt: Date;
}
export class GetTodoDTO {
  @ApiProperty({
    description: `random alphanumeric key generated during upload`,
    example: 'AEWEA',
  })
  @IsString()
  id: string;
}
