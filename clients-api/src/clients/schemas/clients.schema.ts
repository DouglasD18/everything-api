import * as mongoose from 'mongoose';

export const ClientsSchema = new mongoose.Schema({
  nme: String,
  email: String,
  telefone: String,
  endereco: String,
  cpf: String,
});
