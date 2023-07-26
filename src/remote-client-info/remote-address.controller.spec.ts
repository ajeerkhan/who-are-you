import { Test, TestingModule } from '@nestjs/testing';
import { RemoteAddressController } from './remote-address.controller';
import { RemoteAddressService } from './remote-address.service';
import { RemoteAddressResponseDto } from './dto/remote-address-response.dto';

describe('RemoteAddressModuleController', () => {
  let controller: RemoteAddressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RemoteAddressController],
      providers: [RemoteAddressService],
    }).compile();

    controller = module.get<RemoteAddressController>(RemoteAddressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should return the client IP', () => {
    const request : any = {
      url: '/test'
    };
    const responseDto : RemoteAddressResponseDto = controller.getClientIP('127.0.0.1', request)
    console.log(responseDto);
    expect(responseDto).toBeDefined();
    expect(responseDto.url).toEqual(request.url);
  });
});
