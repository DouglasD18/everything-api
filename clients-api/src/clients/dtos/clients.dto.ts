import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class ClientBody {
  @IsNotEmpty({
    message: "client name should not be empty.",
  })
  nome: string;

  @IsNotEmpty({
    message: "client email should not be empty.",
  })
  @IsEmail()
  email: string;

  @IsNotEmpty({
    message: "client phone should not be empty.",
  })
  @Length(11)
  telefone: String;

  @IsNotEmpty({
    message: "client address should not be empty.",
  })
  endereco: String;

  @IsNotEmpty({
    message: "client cpf should not be empty.",
  })
  @Length(11)
  cpf: String;
}
