import { Test, TestingModule } from '@nestjs/testing';
import { RequestIpService } from './request-ip.service';

describe('RequestIpService', () => {
  let service: RequestIpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestIpService],
    }).compile();

    service = module.get<RequestIpService>(RequestIpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
