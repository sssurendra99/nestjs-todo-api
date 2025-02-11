import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @ApiProperty()
  title?: string | undefined;
  @ApiProperty()
  description?: string | undefined;
  @ApiProperty()
  isCompleted: boolean;
}
