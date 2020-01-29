const express = require('express');
const Caesar = require('caesar-salad').Caesar;
const app = express();
const port = 8000;
const password = 'zxzw';
app.get('/encode/:text', (req,res)=>{
  const encodedText =  Caesar.Cipher(password).crypt(req.params.text);
    res.header('Content-Type', 'text/html');
    res.send(`<h1>${encodedText}</h1>`)

});
app.get('/decode/:text', (req,res)=>{
    const decodedText =  Caesar.Decipher(password).crypt(req.params.text);
    res.header('Content-Type', 'text/html');
    res.send(`<h1>${decodedText}</h1>`)

});
app.listen(port,()=>{
    console.log('task2 server run')
});