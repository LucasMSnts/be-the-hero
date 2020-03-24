const express = require('express');

const app = express();

app.use(express.json());

/**
 * Rota / Recurso
 */

/**
 * Metodos HTTP:
 * 
 * GET: Buscar uma informação do backend
 * POST: Criar uma informação do backend
 * PUT: Alterar uma informação do backend
 * DELETE: Deletar uma informação do backend
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Mauro'
    });
});

app.listen(3333);