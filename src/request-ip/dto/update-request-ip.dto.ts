import { PartialType } from '@nestjs/mapped-types';
import { CreateRequestIpDto } from './create-request-ip.dto';

export class UpdateRequestIpDto extends PartialType(CreateRequestIpDto) {}
