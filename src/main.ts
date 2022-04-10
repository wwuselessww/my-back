import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const config = new DocumentBuilder()
    .setTitle('OnlineShop')
    .setDescription('doc')
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  app.use(cookieParser());
  app.use(csurf());

  app.enableCors({ credentials: true, origin: 'http://localhost:3000' });
  const PORT = +process.env.PORT || 5001;

  await app.listen(PORT, () => console.log('ok'));

}

bootstrap();
