const express = require('express');
const app = express();  
const port = 3000;

app.get('/', (req, res)=> res.send("Hello, world!"));
app.get('/student', (req, res)=> res.send("dharm savaliya"));
app.get('/uni', (req, res)=> res.send("RKU"));
app.get('/collage', (req, res)=> res.send("SOE"));


app.listen(port,()=>console.log('example listening on port ${port}!'));


// create one end point/student to disaply student name / uni to disaply univarsity name / collage to disaply the collage name