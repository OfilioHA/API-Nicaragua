import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res)=>{
    res.send("<h1>Hello World</h1>");
})

const port = process.env.PORT || 8000;
const server = app.listen(port, ()=>{
    const { address } = server.address();
    console.log(`Servidor escuchando en el puerto: ${port}`);
    console.log(`Servidor escuchando en el host: ${address}`);
})
