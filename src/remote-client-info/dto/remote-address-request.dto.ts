import { PartialType } from "@nestjs/mapped-types";
import { RemoteClient } from "../entities/remote-address.entity";

/**
 * This represents remote client request.
 */
export class RemoteAddressRequestDto extends PartialType(RemoteClient) {
    requestedTime: Date;
};