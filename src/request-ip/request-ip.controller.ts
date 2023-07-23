import { Controller, Get, Post, Body, Patch, Param, Delete, Ip, Req } from '@nestjs/common';
import { RequestIpService } from './request-ip.service';
import { CreateRequestIpDto } from './dto/create-request-ip.dto';
import { UpdateRequestIpDto } from './dto/update-request-ip.dto';
import { Request } from 'express';
import { RealIP } from 'nestjs-real-ip'

@Controller('request-ip')
export class RequestIpController {
  constructor(private readonly requestIpService: RequestIpService) {}

  @Get()
  getClientIP(@Ip() ip : string) {

    return `Hey! you are ${ip}`;
  };

  @Get("client-ip")
  getTrueClientIP(@Req() req : Request, @RealIP("realIp") realIp : string,  @Ip() ip : string) {
    const requestData = {
      "X-Client-IP" : req.headers["X-Client-IP"],
      "X-Forwarded-For" : req.headers["X-Forwarded-For"],
      "CF-Connecting-IP" : req.headers["CF-Connecting-IP"],
      "Fastly-Client-Ip" : req.headers["Fastly-Client-Ip"],
      "True-Client-Ip" : req.headers["True-Client-Ip"],
      "X-Real-IP" : req.headers["X-Real-IP"],
      "X-Cluster-Client-IP" : req.headers["X-Cluster-Client-IP"],
      "X-Forwarded" : req.headers["X-Forwarded"],
      "Forwarded-For" : req.headers["Forwarded-For"],
      "Forwarded" : req.headers["Forwarded"],
      "appengine-user-ip" : req.headers["appengine-user-ip"],
      "req-connection-remoteAddress" : req.connection?.remoteAddress,
      "req-socket-remoteAddress" : req.socket?.remoteAddress,
      "req-connection-socket-remoteAddress" : req.connection?.remoteAddress,
      "Cf-Pseudo-IPv4" : req.headers["Cf-Pseudo-IPv4"],
      "request-raw" : req.rawHeaders
    };

    return {
      requestData,
      realIp,
      ip
    }
  }

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
