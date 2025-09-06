import { Request, Response } from 'express';
import { CreateUserUseCase } from '@application/useCases/CreateUserUseCase';
import { UserRepository } from 'infrasctructure/repositories/UserRepository';

export class UserController{
    private createUserUseCase: CreateUserUseCase;

    constructor(){
        const userRepository = new UserRepository();
        this.createUserUseCase = new CreateUserUseCase(userRepository);
    }

    async createUser(req: Request, res: Response) {
        try {
            const { name, email } = req.body;
            const user = await this.createUserUseCase.execute(name, email);
            
            return res.status(201).json(user);
        } catch (error) {
            return res.status(400).json({error: (error as Error).message });
        }
    }
}