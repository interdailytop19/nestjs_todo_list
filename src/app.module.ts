import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TodoListModule } from './todo_list/todo_list.module';

@Module({
  imports: [UserModule, TodoListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
