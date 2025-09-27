import { AuthController } from "@presentation/controllers/AuthController";
import { validateDTO } from "@presentation/controllers/middlewares/validateDTO";
import { AuthDTO } from "@presentation/dtos/AuthDTO";
import { Router } from "express";

const router = Router();
const authController = new AuthController();

router.post("", validateDTO(AuthDTO), async(req, res, next) =>{
    try {
        await authController.login(req, res)
    } catch (error) {
        next(error)
    }
});

export default router;