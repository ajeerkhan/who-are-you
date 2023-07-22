import { Test, TestingModule } from '@nestjs/testing';
import { RequestIpController } from './request-ip.controller';
import { RequestIpService } from './request-ip.service';

describe('RequestIpController', () => {
  let controller: RequestIpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestIpController],
      providers: [RequestIpService],
    }).compile();

    controller = module.get<RequestIpController>(RequestIpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
