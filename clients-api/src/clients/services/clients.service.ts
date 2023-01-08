import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { Client } from "../interfaces/clients.interface";
import { ClientBody } from "../dtos/clients.dto";

@Injectable()
export class ClientsService {
  constructor(
    @Inject("CLIENTS_MODEL")
    private clientsModel: Model<Client>,
  ) {}

  async create(createClientBody: ClientBody): Promise<Client> {
    const createdClient = new this.clientsModel(createClientBody);
    return createdClient.save();
  }

  async read(nome: string): Promise<Client> {
    return this.clientsModel.findOne({ nome });
  }

  async readAll(): Promise<Client[]> {
    return this.clientsModel.find().exec();
  }

  async update(nome: string, client: ClientBody): Promise<Client> {
    await this.clientsModel.updateOne({ nome }, client);
    return await this.read(nome);
  }

 async delete(nome: string): Promise<Client> {
    const client = await  this.read(nome);
    await this.clientsModel.deleteOne({ nome });
    return client;
  } 
}