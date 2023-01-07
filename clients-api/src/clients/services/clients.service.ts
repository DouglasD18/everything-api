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

  async readAll(): Promise<Client[]> {
    return this.clientsModel.find().exec();
  }

 /* async delet(clientBody: ClientBody): Promise<Client> {
    const nome = clientBody.nome;
    return this.clientsModel.deleteOne({ nome });
  } */
}