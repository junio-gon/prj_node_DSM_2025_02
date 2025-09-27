// DDD ==> Domain Driven Development

import { IsEmail, IsNotEmpty, IsOptional, Length } from "class-validator";

export class UserDTO {
    @IsNotEmpty({message: "O nome é obrigatório."})
    @Length(5, 70, {message: "O nome deve conter entre 5 e 70 caracteres."})
    name!: string;

    @IsEmail({}, {message: "O e-mail informado é invalido."})
    @IsNotEmpty({message: "O e-mail é um campo obrigatório."})
    email!: string;

    @IsOptional()
    id?: string

    @IsNotEmpty({message: "Senha é obrigatório"})
    password!: string;

    constructor(_name: string, _email: string, _password: string, _id?: string){
        this.name = _name;
        this.email = _email;
        this.id = _id;
        this.password = _password
    }
}