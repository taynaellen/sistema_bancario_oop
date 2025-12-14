import { Cliente } from './Cliente.js';
import { BC } from './BC.js';




export class Banco {
  constructor(nome) {
    this.nome = nome;
    this.clientes = [];
    this.bc = new BC();
    this.id = 1;
  }



  criarCliente(nome) {
    const cliente = new Cliente(this.id++, nome);
    this.clientes.push(cliente);
    return cliente;
  }


  // buscarCliente(id) {
  //   return this.clientes.find(c => c.id == id);
  // }


  buscarCliente(id) {
  const cliente = this.clientes.find(c => c.id == id);
  if (!cliente) throw new Error("Cliente não encontrado");
  return cliente;
  }


  depositar(id, valor) {
    const c = this.buscarCliente(id);
    c.depositar(valor);
    if (valor > 1000) this.bc.registrar(c, valor, "Depósito");
  }


  sacar(id, valor) {
    const c = this.buscarCliente(id);
    c.sacar(valor);
    if (valor > 1000) this.bc.registrar(c, valor, "Saque");
  }


  transferir(de, para, valor) {
    const origem = this.buscarCliente(de);
    const destino = this.buscarCliente(para);
    origem.transferir(destino, valor);
    if (valor > 1000) this.bc.registrar(origem, valor, "Pix");
  }


  extrato(id) {
    return this.buscarCliente(id).extrato;
  }



}
