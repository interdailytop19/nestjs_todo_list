import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CreateUserDto } from './dto';
import { getModelToken } from '@nestjs/mongoose';
import { User } from './user.schema';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, {
				provide: getModelToken('User'),
				useValue: User
			}],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

	it('should create a user', () => {
		expect(controller.create(new CreateUserDto)).toEqual({});
	});
});
