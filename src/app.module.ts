import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TodoListModule } from './todo_list/todo_list.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from './config/config.module';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [UserModule, TodoListModule, ConfigModule, MongooseModule.forRoot('mongodb://localhost:27017/todo_list')],
  controllers: [AppController],
  providers: [AppService,{
		provide: APP_PIPE,
		useClass: ValidationPipe,
	}],
})
export class AppModule {}
