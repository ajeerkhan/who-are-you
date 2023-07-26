import { Controller, Get, Post, Body, Patch, Param, Delete, Ip, Req } from '@nestjs/common';
import { RemoteAddressService } from './remote-address.service';
import { RemoteAddressRequestDto } from './dto/remote-address-request.dto';
import { Request } from 'express';
import { RealIP } from 'nestjs-real-ip'

@Controller('client')
export class RemoteAddressController {
  constructor(private readonly remoteAddressService: RemoteAddressService) {}

  @Get(["/", "/ip"])
  getClientIP(@RealIP("realIp") realIp : string, @Req() req : Request) {
    let remoteAddressRequestDto: RemoteAddressRequestDto = new RemoteAddressRequestDto();
    remoteAddressRequestDto = {
      ip : realIp,
      url: req.url,
      requestedTime : new Date()
    };
    return this.remoteAddressService.getClientIP(remoteAddressRequestDto);
  };

  @Get('location')
  async getClientLocation(@RealIP("realIp") realIp : string, @Req() req : Request) {
    let remoteAddressRequestDto: RemoteAddressRequestDto = new RemoteAddressRequestDto();
    remoteAddressRequestDto = {
      ip : realIp,
      url: req.url,
      requestedTime : new Date()
    };

    const location = await this.remoteAddressService.getClientLocation(remoteAddressRequestDto);
    if(location)
      return location;
    return ({
      code : 404,
      message: `We are unable to locate the location for ip ${remoteAddressRequestDto.ip}.`
    });
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
}
