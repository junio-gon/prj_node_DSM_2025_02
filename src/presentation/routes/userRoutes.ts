import { Router } from "express";
import { UserController } from "@presentation/controllers/UserController";
import { validateDTO } from "@presentation/controllers/middlewares/validateDTO";
import { UserDTO } from "@presentation/dtos/UserDTO";
import { authenticateJWT } from "@presentation/controllers/middlewares/authenticateJWT";


const router = Router();
const userController = new UserController();

//router.get("/users", (req, res) => { res.send("User rotes") });
/**
 * @swagger
 * /api/users:
 *  post:
 *      summary: Criação de usuário
 *      tags: [Usuários]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          email:
 *                              type: string
 *      responses:
 *          201:
 *              description: Usuário criado com sucesso
 *          400:
 *              description: Erro ao criar usuario
 */
router.post("/users",validateDTO(UserDTO), async(req, res, next) => {
    try {
        await userController.createUser(req, res);
    } catch (error) {
        next(error);
    }
} );

router.get("/users", authenticateJWT as any, async(req, res, next) =>{
    try {
        await userController.getAllUsers(req, res);
    } catch (error) {
        next(error);
    }
});

export default router;