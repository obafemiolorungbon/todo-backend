import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import * as randomize from 'randomatic';
import { FileService } from './file.service';
import { FileDTO } from './file.dto';
import { HashingService } from 'src/common/hasher/hasher.service';
import { Config } from '../config';
const appConfig = Config[process.env.NODE_ENV || 'staging'];

@Controller('file')
export class FileController {
  constructor(
    private readonly textService: FileService,
    private readonly hashService: HashingService,
  ) {}
  @Post()
  async createText(@Body() body: FileDTO): Promise<any> {
    const { body: payload } = body;
    const payloadTohash = JSON.stringify(payload);
    const hashed = this.hashService.hashPayload(
      payloadTohash,
      appConfig.secret,
    );
    // hash the word
    const randomLink = randomize('a0', '6');
    // generate show link using randomatic
    // TODO ensure the link is unique
    const savedFile = await this.textService.createFile({
      hashedPayload: hashed,
      link: randomLink,
      secure: body.secure,
      securePhrase: body.secretPhrase,
      createdAt: new Date(),
    });
    // save, link, hashed word,
    //index the db using the link
    // save that into the db,
    //return the link
    return {
      status: true,
      url: savedFile.link,
    };
  }

  @Get(':id')
  async getText(@Param() param: Record<string, string>): Promise<any> {
    const foundFile = await this.textService.findFile(param.id);
    if (foundFile) {
      const { hashedPayload } = foundFile;
      const decodedPayload = this.hashService.unhashPayload(
        hashedPayload,
        appConfig.secret,
      );
      if (!decodedPayload) {
        throw new BadRequestException('The link you provided has expired');
      }

      return {
        status: true,
        data: decodedPayload,
      };
    }
    throw new NotFoundException('File Non Existent, Probably Expired.');
  }
}
