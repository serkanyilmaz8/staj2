import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todosRepository.find();
  }

  create(todo: Todo): Promise<Todo> {
    return this.todosRepository.save(todo);
  }

  update(id: number, updatedTodo: Todo): Promise<any> {
    return this.todosRepository.update(id, updatedTodo);
  }

  delete(id: number): Promise<any> {
    return this.todosRepository.delete(id);
  }
}