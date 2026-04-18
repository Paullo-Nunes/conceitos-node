import express from "express";

const app = express();
app.use(express.json())

const users = [] //para salvar os usuarios, mas não é profissional porque quando a página é atualizada os dados somem

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

/* 
mongodb+srv://programador:zmRho64jHp6ujcGn@programador.sambd2y.mongodb.net/?appName=Programador 
zmRho64jHp6ujcGn
*/ 