import express from "express";
import { PrismaClient } from "./generated/prisma/client.js";

const app = express();
app.use(express.json())

const prisma = new PrismaClient();

//rota de listar, buscar e obter

app.get('/usuario', async (req, res) => {
    const users = await prisma.user.findMany() //findmany procura tudo que tem user e retorna para users
    res.status(200).json(users)
})

//rota de criar

app.post('/usuario', async (req, res) => {
    const user = await prisma.user.create({
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    })
    res.status(201).json(user) //retornando usuário criado
})
//rota de atualização de usuário

app.put('/usuario/:id', async (req, res) => {
    //route params -> :id
    const user = await prisma.user.update({
        where: {
            id: req.params.id

        },
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    })
    res.status(201).json(user) //retornando usuário criado
})

app.listen(3000)
