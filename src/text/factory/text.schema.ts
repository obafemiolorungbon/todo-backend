import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TextUploadDocument = TextUpload & Document;

@Schema()
export class TextUpload {
  @Prop({ required: true, unique: true })
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

export const TextUploadSchema = SchemaFactory.createForClass(TextUpload);
