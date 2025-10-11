import swaggerJsdoc from 'swagger-jsdoc'

const options: swaggerJsdoc.Operation = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Prj Agenda',
            version: '1.0.0',
            description: 'Documentação da API Prj Agenda - TS'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Ambiente de desenvolvimento'
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        }
    },
    apis: [
        './src/presentation/routes/*.ts', 
        './src/presentation/controller/*.ts'
    ]
};

export const swaggerSpec = swaggerJsdoc(options);