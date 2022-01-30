import { IsString, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TextDTO {
  @ApiProperty({
    description: `body of the text`,
    example: 'Today is a great day too utilise pastebin',
  })
  @IsString()
  body?: string;

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
export class GetTextDTO {
  @ApiProperty({
    description: `random alphanumeric key generated during upload`,
    example: 'AEWEA',
  })
  @IsString()
  id: string;
}
