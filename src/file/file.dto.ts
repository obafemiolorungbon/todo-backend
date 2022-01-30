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
      uploadDate: '2022-01-30T08:27:55Z',
    }`,
  })
  @IsObject()
  body?: Record<string, unknown>;

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

export class GetFileDTO {
  @ApiProperty({
    description: `random alphanumeric key generated during upload`,
    example: 'SD4SEA',
  })
  @IsString()
  id: string;
}
