import { Body, Controller, Post } from "@nestjs/common";
import { ClientsService } from "../services/clients.service";
import { ClientBody } from "../dtos/clients.dto";
import { Client } from "../interfaces/clients.interface";

@Controller()
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post('clients')
  async create(@Body() body: ClientBody) {
    const client = await this.clientsService.create({
      ...body,
    });

    return {
      client,
    }
  }
}