const express = require('express');

const app = express();

app.get('/teste', (req, res) =>{
    return res.json({ hello: "world 2"});
})

app.listen((3333), console.log('Server running on port 3333'));