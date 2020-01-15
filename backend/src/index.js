const express = require('express'); //express -> rotas
const mongoose = require('mongoose'); //mongoose -> mongodb -> banco de dados
const routes = require('./routes');// colocando as rotas em um arquivo separado

const app = express(); //inicializar o localhost

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-hghrk.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json()); //para que o express entenda o json
app.use(routes);

app.listen(3333); // adicionar a porta