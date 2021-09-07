const express = require('express');
const path = require('path');
const app=express();
const port = process.env.port || 4000;

app.use(express.static('public'))


app.get('/', (req,res) =>{
    res.sendFile(path.resolve(__dirname,'pages/index.html'));
})
app.get('/map', (req,res) =>{
    res.sendFile(path.resolve(__dirname,'pages/map.html'));
})
app.listen(4000, () =>{
    console.log("Server Running at 4000");
})
