/*import express, { Router, Request, Response } from 'express'

const app = express()

const route = Router()

const PORT = 3333

const {request} = require("http")

app.use(express.json())

//ROTA DE LOGIN

route.post("/login", (req: Request, res: Response) => {
  const {login, password} = request.body

  const signIn = {
    login,
    password,
  }

  return res.json(signIn)

})

app.use(route)

app.listen(PORT, () => 'server running on port 3333') 
*/

const express = require("express");

const request = require("http");

const app = express();

app.use(express.json());


app.post("/login", (request: Request, response: Response) =>{
  const { login, password } = request.body;

  const signIn = {
    login,
    password,
  }

  return response.json(signIn);
})

app.listen(3333, () => console.log("server in port 3333"));


/*import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

interface LoginData {
    username: string;
    password: string;
}

const app = express();

app.use(bodyParser.json());

app.post('/login', (req: Request, res: Response) => {
    const { username, password }: LoginData = req.body;

    if (username === 'joao' && password === '123') {
        res.status(200).json({ message: 'Login bem-sucedido' });
    } else {
        res.status(401).json({ message: 'Credenciais inválidas' });
    }
});

app.listen(3333, () => {
    console.log('Servidor Express iniciado na porta 3000');
});
*/