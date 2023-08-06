import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CreateUserDto } from './dto';
import { getModelToken } from '@nestjs/mongoose';

describe('UserController', () => {
  let controller: UserController;
	let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, {
				provide: getModelToken('User'),
				useValue: {
					create: jest.fn(),
					findOne: jest.fn().mockReturnThis(),
					exec: jest.fn()
				}
			}],
    }).compile();

    controller = module.get<UserController>(UserController);
		userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

	it('should create a user', async() => {
		expect(controller.create(new CreateUserDto())).toEqual(Promise.resolve({}));
		const createUserDto: CreateUserDto = {
			username: 'testuser',
		};
    const createMock = jest.fn().mockResolvedValue(createUserDto);
    userService.create = createMock;
		const response = await controller.create(createUserDto);
		expect(response).toEqual(createUserDto);
		expect(userService.create).toHaveBeenCalledWith(createUserDto);
	});

	it('should get a user', async () => {
		const get_result = Promise.resolve({username: 'testuser'});
		const findOneMock = jest.fn().mockResolvedValue(get_result);
    userService.findOne = findOneMock;
    const response = controller.findOne('testuser');
    expect(response).toEqual(Promise.resolve(get_result));
	});
});
