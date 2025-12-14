export class BC {
  constructor() {
    this.movimentacoes = [];
  }
  

  registrar(cliente, valor, tipo) {
    this.movimentacoes.push({
      cliente: cliente.nome,
      tipo,
      valor,
      data: new Date()
    });
  }
}
