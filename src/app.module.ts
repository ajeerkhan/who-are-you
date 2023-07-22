import { Module } from '@nestjs/common';
import { RequestIpModule } from './request-ip/request-ip.module';

@Module({
  imports: [RequestIpModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
