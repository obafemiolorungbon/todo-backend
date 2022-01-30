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
import { TextService } from './text.service';
import { GetTextDTO, TextDTO } from './text.dto';
import { HashingService } from 'src/common/hasher/hasher.service';
import { Config } from '../config';
const appConfig = Config[process.env.NODE_ENV || 'staging'];

@Controller('text')
export class TextController {
  constructor(
    private readonly textService: TextService,
    private readonly hashService: HashingService,
  ) {}
  @Post()
  async createText(@Body() body: TextDTO): Promise<any> {
    const { body: payload } = body;
    const hashed = this.hashService.hashPayload(payload, appConfig.secret);
    // hash the word
    const randomLink = randomize('A0', '5');
    // generate show link using randomatic
    // TODO ensure the link is unique
    const savedWord = await this.textService.createtext({
      hashedPayload: hashed,
      link: randomLink,
      secure: body.secure,
      securePhrase: body.secretPhrase,
      createdAt: new Date(),
    });
    return {
      status: true,
      url: savedWord.link,
    };
  }

  @Get(':id')
  async getText(@Param() param: GetTextDTO): Promise<any> {
    const foundWord = await this.textService.findText(param.id);
    if (foundWord) {
      const { hashedPayload } = foundWord;
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
    throw new NotFoundException('Text Non Existent, Probably Expired.');
  }
}
