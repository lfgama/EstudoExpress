const express = require('express');
const app = express();

app.use(express.json());

let usuarios = [
    {nome: "Luiz", sobrenome: "Gama"},
    {nome: 'Hendy', sobrenome: 'Pereira'},
    {nome: 'Gabriel', sobrenome: 'Brunetti'}
]

app.listen(3000, () => { //3000 ou 8080
    console.log('Servidor rodando!'); 
} )

app.get("/", (request, response) => {
    return response.send('Olá mundo!')
})

app.post("/usuarios", (request, response) => {
    const { nome, sobrenome } = request.body;
    usuarios.push({ nome, sobrenome });
    return response.json({ nome, sobrenome });
})

app.get("/usuarios", (request, response) => {
    return response.json(usuarios);
})

app.get("/inicio", (request, response) => {
    return response.send('Alô, alô, graças a Deus!')
})