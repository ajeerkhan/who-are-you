import { Injectable } from '@nestjs/common';
import { RemoteAddressResponseDto } from './dto/remote-address-response.dto';
import { RemoteAddressRequestDto } from './dto/remote-address-request.dto';
import * as geoIPDB from 'fast-geoip'

@Injectable()
export class RemoteAddressService {
  getClientIP(remoteAddressRequestDto : RemoteAddressRequestDto) : RemoteAddressResponseDto {
    const remoteAddressResponseDto : RemoteAddressResponseDto = { ...remoteAddressRequestDto, responseTime:  new Date() };
    return remoteAddressResponseDto;
  }

  async getClientLocation(remoteAddressRequestDto : RemoteAddressRequestDto) : Promise<any> {
    return await geoIPDB.lookup(remoteAddressRequestDto.ip);
  }
}
