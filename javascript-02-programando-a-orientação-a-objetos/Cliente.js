export class Cliente {
  constructor(nome, cpf) {
    this.nome = nome;
    this._cpf = cpf;
  }
  
  // == Assessores
  get cpf() {
    return this._cpf;
  }

}
