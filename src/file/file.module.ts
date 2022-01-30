import { FileUpload, FileUpladSchema } from './factory/file.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ConflictException, Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';

import { Document } from 'mongoose';
import { HashingService } from 'src/common/hasher/hasher.service';
@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: FileUpload.name,
        useFactory: () => {
          const schema: typeof FileUpladSchema = FileUpladSchema;
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
  controllers: [FileController],
  providers: [FileService, HashingService],
  exports: [FileService],
})
export class FileModule {}
