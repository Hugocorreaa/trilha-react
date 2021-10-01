import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  static numeroDeContas = 0
  agencia;
  _cliente;
  _saldo = 0;

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

  // == Construtores
  constructor(cliente, agencia){
    this.agencia = agencia
    this.cliente = cliente
  ContaCorrente.numeroDeContas += 1
  }


  // == Métodos
  //Sacar
  sacar(valor) {
    if (this._saldo < valor) return "Saldo insuficiente para saque";
    this._saldo -= valor;
  }

  //Depositar
  depositar(valor) {
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
