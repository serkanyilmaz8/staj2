import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TodoService, Todo } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll(): Todo[] {
    return this.todoService.findAll();
  }

  @Post()
  create(@Body() todo: Todo) {
    this.todoService.create(todo);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedTodo: Todo) {
    this.todoService.update(Number(id), updatedTodo);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.todoService.delete(Number(id));
  }
}