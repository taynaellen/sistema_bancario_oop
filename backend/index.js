import express from 'express';
import cors from 'cors';
import { Banco } from './src/Banco.js';


const app = express();
app.use(cors());
app.use(express.json());

const banco = new Banco("Banco central");



app.post("/clientes", (req, res) => {
  try {
    const cliente = banco.criarCliente(req.body.nome);
    res.json(cliente);
  } 
  
  catch (erro) {
    res.status(400).json({ erro: erro.message });
  }

});

app.get("/clientes", (req, res) => {
  res.json(banco.clientes);

});



app.post("/deposito", (req, res) => {
  try {
    const { clienteId, valor } = req.body;
    banco.depositar(clienteId, valor);
    res.json({ ok: true });
  } 
  
  catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
});



app.post("/saque", (req, res) => {
  try {
    const { clienteId, valor } = req.body;
    banco.sacar(clienteId, valor);
    res.json({ ok: true });
  } 
  
  catch (erro) {
    res.status(400).json({ erro: erro.message });
  }

});



app.post("/pix", (req, res) => {
  try {
    const { de, para, valor } = req.body;
    banco.transferir(de, para, valor);
    res.json({ ok: true });
  } 
  
  catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
});




app.get("/extrato/:id", (req, res) => {
  try {
    const extrato = banco.extrato(req.params.id);
    res.json(extrato);
  } 
  
  catch (erro) {
    res.status(400).json({ erro: erro.message });
  }

});




app.listen(3001, () =>
  console.log("backend rodando em http://localhost:3001")
);
