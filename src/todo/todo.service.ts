import { Todo, TodoDocument } from './factory/todo.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private textModel: Model<TodoDocument>) {}

  async createTodo(payload: Todo): Promise<Todo> {
    const createdTodo = new this.textModel(payload);
    return createdTodo.save();
  }

  async findTodo(email: string): Promise<any> {
    return this.textModel.find({ creator: email });
  }

  async deleteTodo(id: string): Promise<Todo> {
    return this.textModel.findOneAndDelete({ _id: id });
  }

  async updateTodo(id: string, data: any): Promise<Todo> {
    return this.textModel.findOneAndUpdate({ _id: id }, data, { new: true });
  }
}
