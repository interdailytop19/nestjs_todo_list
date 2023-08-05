import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
	const appOptions = {cors: true};
  const app = await NestFactory.create(AppModule, appOptions);
	app.setGlobalPrefix('api');

	const options = new DocumentBuilder()
	.setTitle('nestjs todo_list')
	.setDescription('nestjs todo_list description')
	.setVersion('1.0')
	.addBearerAuth()
	.build();
	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('/docs', app, document);

  await app.listen(3000);
}
bootstrap();
