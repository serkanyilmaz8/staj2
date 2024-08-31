import { Injectable } from '@nestjs/common';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    { id: 1, title: 'Learn NestJS', completed: false },
    { id: 2, title: 'Build a simple API', completed: false },
  ];

  findAll(): Todo[] {
    return this.todos;
  }

  create(todo: Todo) {
    this.todos.push(todo);
  }

  update(id: number, updatedTodo: Todo) {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    if (todoIndex > -1) {
      this.todos[todoIndex] = updatedTodo;
    }
  }

  delete(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}