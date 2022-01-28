import { TextUpload, TextUploadDocument } from './factory/text.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TextService {
  constructor(
    @InjectModel(TextUpload.name) private textModel: Model<TextUploadDocument>,
  ) {}

  async createtext(payload: TextUpload): Promise<TextUpload> {
    const createdText = new this.textModel(payload);
    return createdText.save();
  }

  async findText(link: string): Promise<TextUpload> {
    return this.textModel.findOne({ link });
  }
}
