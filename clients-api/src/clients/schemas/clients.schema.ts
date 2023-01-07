import * as mongoose from 'mongoose';

export const ClientsSchema = new mongoose.Schema({
  id: Number,
  nome: String,
  email: String,
  telefone: String,
  endereco: String,
  cpf: String,
});
