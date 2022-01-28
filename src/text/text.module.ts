import { TextUpload, TextUploadSchema } from './factory/text.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ConflictException, Module } from '@nestjs/common';
import { TextService } from './text.service';
import { TextController } from './text.controller';

import { Document } from 'mongoose';
import { HashingService } from 'src/common/hasher/hasher.service';
@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: TextUpload.name,
        useFactory: () => {
          const schema: typeof TextUploadSchema = TextUploadSchema;
          schema.post('save', function (error, doc: Document, next) {
            if (error.name === 'MongoServerError' && error.code === 11000) {
              next(new ConflictException('Link Already Exist'));
            } else {
              next();
            }
          });
          return schema;
        },
      },
    ]),
  ],
  controllers: [TextController],
  providers: [TextService, HashingService],
  exports: [TextService],
})
export class TextModule {}
