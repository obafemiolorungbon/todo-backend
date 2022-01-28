import {
  BadGatewayException,
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { JwtPayload, sign, verify } from 'jsonwebtoken';
@Injectable()
export class HashingService {
  hashPayload(payload: string, secret: string): string {
    try {
      const hashedWord = sign(payload, secret);
      return hashedWord;
    } catch (error) {
      throw new BadGatewayException(
        'Failed while creating link, try again later',
      );
    }
  }
  unhashPayload(token: string, secret: string): JwtPayload | string {
    try {
      const unhashedWord = verify(token, secret);
      return unhashedWord;
    } catch (error) {
      throw new BadRequestException(
        'The token provided has expired or invalid',
      );
    }
  }
}
