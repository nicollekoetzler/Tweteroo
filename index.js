import chalk from 'chalk';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const usuarios = []
const tweets = []

// Configura uma função pra ser executada quando bater um post na rota "/sign-up"
app.post('/sign-up', (req, res) => {

    const data = req.body
    data.username
    data.avatar

    usuarios.push({ username, avatar })

    res.send("OK");

});

app.post('/tweets', (req, res) => {

    const data = req.body
    data.username
    data.tweet

    tweets.push({ username, tweet })

    res.send("OK");

})

app.get('/tweets', (req, res) => {

    const tweetsInvertidos = [...tweets].reverse();
    if(tweets.length <= 10 ){

        res.send(tweetsInvertidos);
    }

});

app.listen(5000, () => {
    console.log(chalk('server ok'));
});