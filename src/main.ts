import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set up Swagger options
  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API Documentation for My Project')
    .setVersion('1.0')
    .build();

  // .addBearerAuth() // Optional: If you use JWT authentication

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(3004);
}
bootstrap();
