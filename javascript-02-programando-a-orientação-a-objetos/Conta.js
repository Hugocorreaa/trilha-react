export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    this._saldoInicial = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
    this._saldo = 0;
  }
  // == Assessores
  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }
  get cliente() {
    return this._cliente;
  }

  //Saldo
  get saldo() {
    return this._saldo;
  }

  // == Métodos

  //Sacar
  sacar(valor) {
    let taxa = 1;
    return this._sacar(valor, taxa);
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
    return 0;
  }

  //Depositar
  depositar(valor) {
    let taxa = 1.1 * valor;
    if (valor <= 0) {
      return "Erro ao depositar! Insira um valor permitido";
    } else {
      this._saldo += valor;
    }
  }

  //Transferência
  transferir(valor, conta) {
    if (this._saldo < valor) return "Sem saldo para realizar transferência.";
    this.sacar(valor);
    conta.depositar(valor);
  }
}
