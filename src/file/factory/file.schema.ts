import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FileUploadDocument = FileUpload & Document;

@Schema()
export class FileUpload {
  @Prop({ required: true, unique: true, index: true })
  link: string;
  @Prop({ default: false })
  secure: boolean;
  @Prop()
  securePhrase: string;
  @Prop({ required: true })
  hashedPayload: string;
  @Prop({ type: Date, expires: '59m', default: Date.now })
  createdAt: Date;
}

export const FileUpladSchema = SchemaFactory.createForClass(FileUpload);
