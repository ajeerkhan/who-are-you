import { Controller, Get, Post, Body, Patch, Param, Delete, Ip } from '@nestjs/common';
import { RequestIpService } from './request-ip.service';
import { CreateRequestIpDto } from './dto/create-request-ip.dto';
import { UpdateRequestIpDto } from './dto/update-request-ip.dto';

@Controller('request-ip')
export class RequestIpController {
  constructor(private readonly requestIpService: RequestIpService) {}

  @Get()
  getClientIP(@Ip() ip : string) {
    return `Hey! you are ${ip}`;
  };

  @Post()
  create(@Body() createRequestIpDto: CreateRequestIpDto) {
    return this.requestIpService.create(createRequestIpDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestIpService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequestIpDto: UpdateRequestIpDto) {
    return this.requestIpService.update(+id, updateRequestIpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestIpService.remove(+id);
  }
}
