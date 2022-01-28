import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Config } from './config';
import { TextModule } from './text/text.module';
const appConfig = Config[process.env.NODE_ENV || 'staging'];
@Module({
  imports: [
    MongooseModule.forRoot(appConfig.database, appConfig.databaseoptions),
    TextModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes({ path: 'user', method: RequestMethod.POST });
  }
}
