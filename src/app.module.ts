import { Module } from '@nestjs/common';
import { RemoteAddressModule } from './remote-client-info/remote-address.module';

@Module({
  imports: [RemoteAddressModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
