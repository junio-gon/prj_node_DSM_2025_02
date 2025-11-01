// export class User {
//     id?: number;
//     name: string;
//     email: string;
//     password: string;

//     constructor(_name: string, _email: string, _password: string){
//         this.name = _name;
//         this.email = _email;
//         this.password = _password;
//     }
// }

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("users_orm_new")
export class User {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    constructor(_name: string, _email: string, _password: string){
        this.name = _name;
        this.email = _email;
        this.password = _password;
    }
}