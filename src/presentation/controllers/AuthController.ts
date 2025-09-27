import { GetUserByEmailUseCase } from "@application/useCases/GetUserByEmailUseCase";
import { UserRepository } from "infrasctructure/repositories/UserRepository";
import { Request, Response } from 'express';
import bcrypt  from 'bcrypt';
import { generateToken } from '@utils/jwt';

export class AuthController{
    private readonly geUsertByEmailUseCase: GetUserByEmailUseCase;

    constructor(){
        const userRepository = new UserRepository();
        this.geUsertByEmailUseCase = new GetUserByEmailUseCase(userRepository);
    }

    async login(req: Request, res: Response){
        try {
            const { email, password } = req.body;
            const user = await this.geUsertByEmailUseCase.execute(email)

            if (!user) {
                return res.status(404).json({error: "User not found"})
            }

            const isPaswordValid = await bcrypt.compare(password ?? "", user.password ?? "");

            if (!isPaswordValid) {
                return res.status(401).json({error: "Invalid password"});
            }

            const token = generateToken({ id: user.id, email: user.email});

            return res.status(200).json({token})
        } catch (error) {
            
        }
    }

}