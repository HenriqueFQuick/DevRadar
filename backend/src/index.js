const express = require('express'); //express -> rotas
const mongoose = require('mongoose'); //mongoose -> mongodb -> banco de dados
const cors = require('cors');
const http = require('http');
const routes = require('./routes');// colocando as rotas em um arquivo separado

const { setupWebSocket } = require('./websocket')

const app = express(); //inicializar o localhost
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-hghrk.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Liberar para uma porta especifica app.use(cors({ origin: 'http://localhost:3000' }))
app.use(cors());
app.use(express.json()); //para que o express entenda o json
app.use(routes);

server.listen(3333); // adicionar a porta