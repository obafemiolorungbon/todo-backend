import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop({ required: true, index: true })
  title: string;
  @Prop({ required: true })
  creator: string;
  @Prop()
  note: string;
  @Prop({ required: true, enum: ['created', 'in progress', 'completed'] })
  status: string;
  @Prop({ type: Date, default: Date.now, required: false })
  createdAt: Date;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
