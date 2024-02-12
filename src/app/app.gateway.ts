import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessageDto } from 'src/message/dto';
import { MessageService } from 'src/message/message.service';

@WebSocketGateway()
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  constructor(private readonly messageService: MessageService) {}

  @WebSocketServer() server: Server;
  @SubscribeMessage('sendMessage') // Подписка по событиям на websockets
  async handleSendMessage(client: Socket, payload: MessageDto): Promise<void> {
    await this.messageService.createMessage(payload);
    this.server.emit('recMessage', payload);
  }

  afterInit(server: any) {
    console.log({ server });
  }

  handleConnection(client: Socket) {
    console.log(`Connected client: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Disconnected client: ${client.id}`);
  }
}
