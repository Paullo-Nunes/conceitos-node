import express from "express";
import { PrismaClient } from "./generated/prisma/client.js";

const app = express();
app.use(express.json())

const prisma = new PrismaClient();

//rota de listar, buscar e obter

app.get('/usuario', (req, res) => {

    res.status(200).json(users)
})

//rota de criar

app.post('/usuario', async (req, res) => {
    await prisma.user.create({
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    })
    res.status(201).json({ message: "Usuário criado com sucesso" })
})

app.listen(3000)
