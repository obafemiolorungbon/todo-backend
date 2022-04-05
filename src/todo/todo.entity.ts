import { ApiProperty } from '@nestjs/swagger';
// determines what goes out from the API. useful for swagger/docs
export class Todo {
  @ApiProperty({
    description: 'The title of the text. This is the name of the text file.',
    example: 'Clean',
  })
  title: string;
  @ApiProperty({
    description: 'The text attached to the todo. Helps in completing todo.',
    example: 'You have to clean the house.',
  })
  note: string;
  @ApiProperty({
    description:
      'The current status of the todo. Can be created, in progress, or completed.',
    example: 'created',
  })
  status: string;
  @ApiProperty({
    description: 'The email of the person who created the todo.',
    example: 'abc@gmail.com',
  })
  creator: string;
}
