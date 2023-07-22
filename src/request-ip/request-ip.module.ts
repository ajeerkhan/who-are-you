import { Module } from '@nestjs/common';
import { RequestIpService } from './request-ip.service';
import { RequestIpController } from './request-ip.controller';

@Module({
  controllers: [RequestIpController],
  providers: [RequestIpService]
})
export class RequestIpModule {}
