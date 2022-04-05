import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Config } from './config';
const appConfig = Config[process.env.NODE_ENV || 'staging'];
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const whitelistedClient = ['http://localhost:3000', 'http://localhost:3001'];

  app.setGlobalPrefix('api/v1');
  app.use(helmet());
  app.enableCors({
    origin: function (origin, callback) {
      if (whitelistedClient.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  });
  const config = new DocumentBuilder()
    .setTitle('Bookr Todo API')
    .setDescription('Bookr Todo API')
    .setVersion('1.0')
    .addTag('bookr-todo')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);
  await app.listen(appConfig.port);
}
bootstrap();
