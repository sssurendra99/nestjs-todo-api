import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from 'src/prisma.service';
import { Todo, Prisma } from '@prisma/client';

@Injectable()
export class TodoService {

  constructor(private prisma: PrismaService){}

  async todo(
    todoWhereUniqueInput: Prisma.TodoWhereUniqueInput,
  ): Promise<Todo | null> {
    return this.prisma.todo.findUnique({
      where: todoWhereUniqueInput,
    });
  }

  async todos(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TodoWhereUniqueInput;
    where?: Prisma.TodoWhereInput;
    orderBy?:Prisma.TodoOrderByWithRelationInput;
  }): Promise<Todo[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.todo.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    })
  }

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const data: Prisma.TodoCreateInput = {
      title: createTodoDto.title,
      description: createTodoDto.description,
      isCompleted: createTodoDto.isCompleted || false,
    }
    return this.prisma.todo.create({
      data,
    })
  }

  async findAll(): Promise<Todo[]> {
    return this.prisma.todo.findMany();
  }

  async findOne(id: string): Promise<Todo | null> {
    return this.prisma.todo.findUnique({
      where: {id},
    });
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo | null> {
    const data: Prisma.TodoUpdateInput = {
      title: updateTodoDto.title,
      description: updateTodoDto.description,
      isCompleted: updateTodoDto.isCompleted
    }
    return this.prisma.todo.update({
      where: {id},
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.todo.delete({
      where: {id}
    });
  }
}
