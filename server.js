import express from "express";
import { PrismaClient } from "./generated/prisma/client.js";

const app = express();
app.use(express.json())

const users = [] //para salvar os usuarios, mas não é profissional porque quando a página é atualizada os dados somem

const prisma = new PrismaClient();

//rota de listar, buscar e obter

app.get('/usuario', (req, res) => {
    
    res.status(200).json(users)
})

//rota de criar

app.post('/usuario', (req, res) => {
    users.push(req.body) //enviando a requisição para o arry users
    res.status(201).json({message: "Usuário criado com sucesso"})
})

app.listen(3000)
