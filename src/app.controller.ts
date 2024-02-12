import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { MessageService } from './message/message.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { MessageDto } from './message/dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly messageService: MessageService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('chat')
  @Render('index')
  Chat(): string {
    return;
  }

  @Get('api/chat')
  @ApiOkResponse({ type: [MessageDto] })
  async getMessages(@Res() res: Response) {
    const messages = await this.messageService.getMessages();
    return res.json(messages);
  }
}
