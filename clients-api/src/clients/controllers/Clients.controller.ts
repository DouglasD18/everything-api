import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { ClientsService } from "../services/clients.service";
import { ClientBody } from "../dtos/clients.dto";

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

  @Get('clients')
  async readAll() {
    const clients = await this.clientsService.readAll();

    return {
      clients,
    };
  }
}