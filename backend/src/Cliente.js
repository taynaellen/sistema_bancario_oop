export class Cliente {
  constructor(id, nome) {
    this.id = id;
    this.nome = nome;
    this.saldo = 0;
    this.extrato = [];
  }



  registrar(tipo, valor) {
    this.extrato.push({ tipo, valor, data: new Date() });
  }



  depositar(valor) {
    this.saldo += valor;
    this.registrar("Depósito", valor);
  }



  sacar(valor) {
    if (valor > this.saldo) throw new Error("Saldo insuficiente");
    this.saldo -= valor;
    this.registrar("Saque", valor);
  }



  transferir(destino, valor) {
    this.sacar(valor);
    destino.depositar(valor);
    this.registrar("Pix enviado", valor);
    destino.registrar("Pix recebido", valor);
  }



}
