import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Post()
  create(@Body() todo: Todo): Promise<Todo> {
    return this.todoService.create(todo);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedTodo: Todo): Promise<any> {
    return this.todoService.update(Number(id), updatedTodo);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<any> {
    return this.todoService.delete(Number(id));
  }
}