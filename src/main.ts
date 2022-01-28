import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Config } from './config';
const appConfig = Config[process.env.NODE_ENV || 'staging'];
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.use(helmet());
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Paste Bin API')
    .setDescription('Paste Bin Backend API Docs')
    .setVersion('1.0')
    .addTag('pastebin')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);
  await app.listen(appConfig.port);
}
bootstrap();
