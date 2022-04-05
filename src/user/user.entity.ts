import { ApiProperty } from '@nestjs/swagger';
// determines what goes out from the API. useful for swagger/docs
export class User {
  @ApiProperty({
    description: 'the user"s email',
    example: 'juan@gmail.com',
  })
  email: string;
  @ApiProperty({
    description:
      'the user"s googleId. This is the unique identifier for the user',
    example: '123456789',
  })
  googleId: string;
  @ApiProperty({
    description:
      'the user"s imageUrl. This is the url of the user"s profile picture',
    example: 'htttp://www.google.com/image.png',
  })
  imageUrl: string;
  @ApiProperty({
    description: 'the user"s  name. This is the name of the user',
    example: 'Julian',
  })
  name: string;
  @ApiProperty({
    description: 'the user"s createdAt. This is the date the user was created',
    example: 'Date example',
  })
  createdAt: string;
}
