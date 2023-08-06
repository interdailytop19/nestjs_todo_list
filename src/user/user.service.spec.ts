import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.schema';
import { CreateUserDto } from './dto';

describe('UserService', () => {
  let service: UserService;
  let userModel: Model<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, {
        provide: getModelToken('User'),
        useValue: {
          create: jest.fn(),
          findOne: jest.fn(),
        },
      }],
    }).compile();

    service = module.get<UserService>(UserService);
    userModel = module.get<Model<User>>(getModelToken('User')); 
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a user', async () => {
      const createUserDto: CreateUserDto = {
        username: 'testuser',
      };

      const createdUser = new User();
      createdUser.username = createUserDto.username;
      const createMock = jest.fn().mockResolvedValue(createdUser);
			service.create = createMock;
      const result = await service.create(createUserDto);
      expect(result).toEqual(createdUser);
    });
  });

  describe('findOne', () => {
    it('should find a user by username', async () => {
      const username = 'testuser';
      const foundUser = new User();
      foundUser.username = username;
      const findOneMock = jest.fn().mockReturnValue(foundUser);
			service.findOne = findOneMock;
      const result = await service.findOne(username);

      expect(result).toEqual(foundUser);
    });

    it('should return null if user is not found', async () => {
      const username = 'nonexistentuser';
			const get_result = {};
      const findOneMock = jest.fn().mockReturnValue(get_result);
			service.findOne = findOneMock;
      const result = await service.findOne(username);
      expect(result).toEqual(get_result);
    });
  });
});