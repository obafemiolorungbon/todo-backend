import { FileUpload, FileUploadDocument } from './factory/file.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class FileService {
  constructor(
    @InjectModel(FileUpload.name) private fileModel: Model<FileUploadDocument>,
  ) {}

  async createFile(payload: FileUpload): Promise<FileUpload> {
    const createdText = new this.fileModel(payload);
    return createdText.save();
  }

  async findFile(link: string): Promise<FileUpload> {
    return this.fileModel.findOne({ link });
  }
}
