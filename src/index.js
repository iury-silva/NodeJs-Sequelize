const express = require('express');
const routes = require('./routes');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API - NodeJS & Sequelize',
      description: 'API para o teste de backend em NodeJS e Sequelize',
      contact: {
        name: 'Iury da silva'
      },
    },
  },
  apis: ['./src/routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use(express.json());

app.use(routes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running: port->${PORT}`)
});

