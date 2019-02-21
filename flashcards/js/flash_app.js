const express = require('express');
const app = express();


const names = [
    {
        first: "Mitch",
        last: "Tyrer"
    },
    {
        first: "Cara",
        last: "Gilman"
    },
    {
        first: "Paul",
        last: "Copper"
    },
    {
        first: "Ben",
        last: "Kaplan"
    },
    {
        first: "Judy",
        last: "Tyrer"
    }
]

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.render('card', { prompt: "Who is buried in Grant's Tomb?", hint: "Think about whose tomb it is."});
});


app.listen(3000, () => {
    console.log('The app is running on localhost:3000')
});