import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway()
export class AppGateway {
  @SubscribeMessage('message') // Подписка по событиям на websockets
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
}
