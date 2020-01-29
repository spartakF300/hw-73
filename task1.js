const express = require('express');
const app = express();
const port = 8000;
app.get('/:name',(req,res)=>{
    res.header('Content-Type', 'text/html');
   res.send(`<h1>${req.params.name}</h1>`)
});
app.listen(port,()=>{
    console.log('server running')
});