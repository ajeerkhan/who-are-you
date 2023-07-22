import { Injectable } from '@nestjs/common';
import { CreateRequestIpDto } from './dto/create-request-ip.dto';
import { UpdateRequestIpDto } from './dto/update-request-ip.dto';

@Injectable()
export class RequestIpService {
  create(createRequestIpDto: CreateRequestIpDto) {
    return 'This action adds a new requestIp';
  }

  findAll() {
    return `This action returns all requestIp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} requestIp`;
  }

  update(id: number, updateRequestIpDto: UpdateRequestIpDto) {
    return `This action updates a #${id} requestIp`;
  }

  remove(id: number) {
    return `This action removes a #${id} requestIp`;
  }
}
