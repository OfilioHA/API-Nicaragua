import express from "express";
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.set('view engine', "ejs");
app.set('views', path.resolve('views/pages'));

console.log(path.resolve('views/pages'));

app.get('/', (req, res)=>{
    res.send("<h1>Hello World</h1>");
})

const port = process.env.PORT || 8000;
const host = process.env.HOST || '';
const server = app.listen(port, host, ()=>{
    const { address } = server.address();
    console.log(`Servidor escuchando en el puerto: ${port}`);
    console.log(`Servidor escuchando en el host: ${address}`);
})
