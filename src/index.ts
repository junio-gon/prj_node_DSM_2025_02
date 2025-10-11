import express from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express"
import { Database } from "infrasctructure/config/Database";
import { swaggerSpec } from "@utils/swgger.config";

dotenv.config();

async function startApp() {
    await Database.init();
    console.log("Banco de dados inicializado com sucesso!");

    const app = express();
    app.use(express.json());

    const userRoutes = await import("@presentation/routes/userRoutes");
    const authRoutes = await import("@presentation/routes/authRoutes");

    app.use("/api", userRoutes.default);
    app.use("/auth", authRoutes.default);

    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Application is running on port ${PORT}`));
}

startApp();