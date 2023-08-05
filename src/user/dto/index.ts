import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class GetUserDto {
  @IsNotEmpty()
	@IsString()
  username: string;
}

export class CreateUserDto {
  @IsNotEmpty()
	@IsString()
  username: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}