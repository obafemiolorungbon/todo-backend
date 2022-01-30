import { ApiProperty } from '@nestjs/swagger';
// determines what goes out from the API. useful for swagger/docs
export class File {
  @ApiProperty({
    description:
      'a five digit random text that when attached to the top level url, routes to the desired text',
    example: 'SFRLS',
  })
  url: string;
  @ApiProperty()
  secure: boolean;
}
