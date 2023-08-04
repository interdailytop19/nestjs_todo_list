import { Injectable } from '@nestjs/common';
import { CreateTodoListDto } from './dto/create-todo_list.dto';
import { UpdateTodoListDto } from './dto/update-todo_list.dto';

@Injectable()
export class TodoListService {
  create(createTodoListDto: CreateTodoListDto) {
    return 'This action adds a new todoList';
  }

  findAll() {
    return `This action returns all todoList`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todoList`;
  }

  update(id: number, updateTodoListDto: UpdateTodoListDto) {
    return `This action updates a #${id} todoList`;
  }

  remove(id: number) {
    return `This action removes a #${id} todoList`;
  }
}
