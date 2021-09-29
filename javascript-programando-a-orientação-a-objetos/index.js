// ==== Imports ====

import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

// ===== Instanciamentos
const cliente1 = new Cliente();
cliente1.saldo = 0;
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1


const contaCorrenteAlice = new ContaCorrente()
contaCorrenteAlice.agencia = 1002
contaCorrenteAlice.cliente = cliente2

// Operações

// -- Depositei 500 
contaCorrenteRicardo.depositar(500)
contaCorrenteRicardo.verSaldo()

// -- Depositei 200
contaCorrenteRicardo.depositar(200)
contaCorrenteRicardo.verSaldo()

// 
contaCorrenteAlice.depositar(200)
contaCorrenteAlice.verSaldo()

//
contaCorrenteRicardo.transferir(200, contaCorrenteAlice)
contaCorrenteAlice.verSaldo()
contaCorrenteRicardo.verSaldo()
contaCorrenteAlice.verSaldo()


//
