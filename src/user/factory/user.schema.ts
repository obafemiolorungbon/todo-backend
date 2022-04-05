import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true, index: true })
  email: string;
  @Prop({ required: true, unique: true, index: true })
  googleId: string;
  @Prop({ required: false })
  name: string;
  @Prop({ default: '' })
  imageUrl: string;
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
