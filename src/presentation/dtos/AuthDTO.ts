import { IsEmail, IsNotEmpty } from "class-validator";

export class AuthDTO{
    @IsEmail({}, {message: "O email informado é invalido."})
    @IsNotEmpty({message: "E-mail é um campo obrigatório."})
    email!: string;

    @IsNotEmpty({message: "Password é um campo obrigatório"})
    password?: string;

    constructor(_email: string, _password?: string){
        this.email = _email;
        this.password = _password;
    }
}