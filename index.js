import chalk from 'chalk';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const usuarios = []
const tweets = []

// Configura uma função pra ser executada quando bater um GET na rota "/"
app.get("/", (req, res) => {
    // Manda como resposta o texto 'Hello World'
    res.send('Hello World');
});

app.listen(5000, () => {
    console.log(chalk.bold.blue('servidor funcionando'));
});