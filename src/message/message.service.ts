import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { MessageDto } from './dto';
import { Chat } from '@prisma/client';

@Injectable()
export class MessageService {
  constructor(private readonly dbService: DbService) {}

  async createMessage(data: MessageDto): Promise<Chat> {
    return await this.dbService.chat.create({ data });
  }

  async getMessages(): Promise<Chat[]> {
    return await this.dbService.chat.findMany();
  }
}
