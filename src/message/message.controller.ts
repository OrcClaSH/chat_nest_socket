import { Body, Controller, Post } from '@nestjs/common';
import { MessageService } from './message.service';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { MessageDto } from './dto';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  @ApiCreatedResponse({ type: MessageDto })
  createMessage(@Body() body: MessageDto): Promise<MessageDto> {
    return this.messageService.createMessage(body);
  }
}
