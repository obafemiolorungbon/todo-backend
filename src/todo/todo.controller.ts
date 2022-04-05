import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { GetTodoDTO, TodoDTO } from './todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Post()
  async createTodo(@Body() body: TodoDTO): Promise<any> {
    const createdTodo = await this.todoService.createTodo(body);
    return {
      status: true,
      text: 'Created Todo Succesfully',
      todo: createdTodo,
    };
  }

  @Get(':id')
  async getTodo(@Param() param: GetTodoDTO): Promise<any> {
    if (param.id && param.id === 'undefined') {
      throw new BadRequestException('Invalid Email provided');
    }
    const retrievedTodo = await this.todoService.findTodo(param.id);
    if (retrievedTodo) {
      return {
        status: true,
        message: 'Todo retrieved Succesfully',
        data: retrievedTodo,
      };
    }
    throw new NotFoundException('Todo Non Existent');
  }

  @Delete(':id')
  async deleteTodo(@Param() param: GetTodoDTO): Promise<any> {
    const deletedTodo = await this.todoService.deleteTodo(param.id);
    if (deletedTodo) {
      return {
        status: true,
        message: 'Deleted Todo Succesfully',
        data: deletedTodo,
      };
    }
    throw new NotFoundException('Todo Non Existent');
  }

  @Put(':id')
  async updateTodo(
    @Param() param: GetTodoDTO,
    @Body() body: TodoDTO,
  ): Promise<any> {
    const updatedTodo = await this.todoService.updateTodo(param.id, body);
    if (updatedTodo) {
      return {
        status: true,
        message: 'Updated Todo Succesfully',
        data: updatedTodo,
      };
    }
    throw new NotFoundException('Todo Non Existent');
  }
}
