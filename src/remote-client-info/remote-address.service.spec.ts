import { Test, TestingModule } from '@nestjs/testing';
import { RemoteAddressService } from './remote-address.service';
import { RemoteAddressRequestDto } from './dto/remote-address-request.dto';
import { RemoteAddressResponseDto } from './dto/remote-address-response.dto';


describe('RemoteAddressService', () => {
  let service: RemoteAddressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RemoteAddressService],
    }).compile();

    service = module.get<RemoteAddressService>(RemoteAddressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the client IP', () => {
    const requestDto  : RemoteAddressRequestDto = {
      url: '/test',
      ip: " 127.0.0.1",
      requestedTime: new Date()
    };
    const responseDto : RemoteAddressResponseDto = service.getClientIP(requestDto);
    console.log(responseDto);
    expect(responseDto).toBeDefined();
    expect(responseDto.url).toEqual(requestDto.url);
  });

});
