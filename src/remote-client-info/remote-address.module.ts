import { Module } from '@nestjs/common';
import { RemoteAddressService } from './remote-address.service';
import { RemoteAddressController } from './remote-address.controller';

@Module({
  controllers: [RemoteAddressController],
  providers: [RemoteAddressService]
})
export class RemoteAddressModule {}
