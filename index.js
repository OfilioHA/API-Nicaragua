import express from "express";
import dotenv from 'dotenv';
import path from 'path';
import expressLayout from 'express-ejs-layouts';

dotenv.config();

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//app.set('layout', 'layout')
app.set('views', path.resolve('views'));
app.set('view engine', "ejs");
app.set('layout', 'layouts/layout');
app.set('layout extractScripts', true)
app.set('layout extractStyles', true)
app.use(expressLayout);

app.use('/css', express.static(path.resolve('node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.resolve('node_modules/bootstrap/dist/js')))

app.get('/', (req, res)=>{
    res.locals = {
        title: 'Example',
        message: 'This is a message'
      };
    res.render('pages/index');
})

const port = process.env.PORT || 8000;
const host = process.env.HOST || '';
const server = app.listen(port, host, ()=>{
    const { address } = server.address();
    console.log(`Servidor escuchando en el puerto: ${port}`);
    console.log(`Servidor escuchando en el host: ${address}`);
})
