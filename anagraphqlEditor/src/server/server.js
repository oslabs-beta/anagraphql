const express = require('express');
const path = require('path');

const app = express();

app.use('/dist',express.static(path.join(__dirname, '..', '..', 'dist')));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '..', '..', 'dist', 'index.html'))
});

app.listen(3000, ()=>console.log(`listening on 3000`))