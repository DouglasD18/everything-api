import { Body, Controller, Delete, Get, Param, Post, Put, Req } from "@nestjs/common";
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

  @Get('clients/:nome')
  async read(@Param("nome") nome: string) {
    const client = await this.clientsService.read(nome);
    return { client };
  }

  @Get('clients')
  async readAll() {
    const clients = await this.clientsService.readAll();

    return {
      clients,
    };
  }

  @Put('clients/:nome')
  async update(@Param('nome') nome: string, @Body() body: ClientBody) {
    const client = await this.clientsService.update(nome, body);
    return { client };
  }

  @Delete('clients/:nome')
  async delete(@Param("nome") nome: string) {
    const client = await this.clientsService.delete(nome);
    return { client };
  }
}