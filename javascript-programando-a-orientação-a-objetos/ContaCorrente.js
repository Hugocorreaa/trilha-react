export class ContaCorrente {
  agencia;
  cliente;

  #saldo = 0;

  // Função ou Método Sacar
  sacar(valor) {
    if (this.#saldo < valor) return;
    this.#saldo -= valor;
  }

  // Função depositar
  depositar(valor) {
    if (valor <= 0) {
      return
    } else {
      this.#saldo += valor;
      
    }
  }

  // Método transferir
  transferir(valor, conta){
    let valorTransferir = 0
    valorTransferir = this.sacar(valor)
    conta.depositar(valorTransferir)
  }


 

  // Ver saldo
  verSaldo(){
      console.log(`O saldo de ${this.cliente.nome} é: R$${this.#saldo}`)
  }

  
}
