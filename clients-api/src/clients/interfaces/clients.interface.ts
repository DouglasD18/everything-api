import { Document } from "mongoose";

export interface Client extends Document {
  nome: string;
  email: string;
  telefone: String;
  endereco: String;
  cpf: String;
}
