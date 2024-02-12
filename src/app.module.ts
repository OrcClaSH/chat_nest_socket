import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app/app.gateway';
import { DbModule } from './db/db.module';
import { MessageModule } from './message/message.module';
import { MessageService } from './message/message.service';
import { DbService } from './db/db.service';

@Module({
  imports: [DbModule, MessageModule],
  controllers: [AppController],
  providers: [AppService, AppGateway, MessageService, DbService],
})
export class AppModule {}
