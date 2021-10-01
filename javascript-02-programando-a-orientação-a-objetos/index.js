// ==== Imports ====

import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// ===== Instanciamentos

// /

const cliente1 = new Cliente("Ricardo", 393922881);
const cliente2 = new Cliente("Alice", 8833929);

const contaCorrenteAlice = new ContaCorrente(cliente2, 1010);
const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);




// ==== Operações
const pessoa = {
    nome: "ju",
    idade: 25
}

const pessoaComTelefone = {
    ...pessoa, telefone: 13932423
}

console.log(pessoaComTelefone)



