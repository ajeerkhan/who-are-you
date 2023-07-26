import { PartialType } from "@nestjs/mapped-types";
import { RemoteAddressRequestDto } from "./remote-address-request.dto";
/**
 * Represents the IP info for the remote client request.
 */
export class RemoteAddressResponseDto extends PartialType(RemoteAddressRequestDto) {
    responseTime : Date;
};