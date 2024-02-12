import { ApiProperty } from '@nestjs/swagger';

export class MessageDto {
  @ApiProperty({ example: 'testUser' })
  username: string;

  @ApiProperty({ example: 'TestTextMessage' })
  text: string;

  @ApiProperty()
  createdAt: Date;
}
