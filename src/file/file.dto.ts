import { IsString, IsBoolean, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FileDTO {
  @ApiProperty({
    description: `payload containing information about the file`,
    example: `{
      filename: 'jaeger.png',
      type: 'image',
      link: 'https://cloudinary.upload/some-weird-alphanumeric',
      size: '202230',
      uploadDate: '2021-23-23',
    }`,
  })
  @IsObject()
  body?: object;

  @ApiProperty({
    description: `boolean indicating if generated link should be secured or not`,
    example: false,
  })
  @IsBoolean()
  secure?: boolean;

  @ApiProperty({
    description: `The secured phrase to use if the secured option is selected`,
    example: 'aot-big-fan',
  })
  @IsString()
  secretPhrase?: string;
}
