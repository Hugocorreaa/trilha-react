// ============ Constantes =============

const listaDeDestinos = [`Salvador`, `São Paulo`, `Rio de Janeiro`];

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "São Paulo";

// ============ Dados do passageiro =============
console.log(
  `========= Dados do passageiro =========\nIdade do comprador: ${idadeComprador}`
);
console.log(`\nDestino: ${destino}`)
if (estaAcompanhada == false && temPassagemComprada == false) {
  console.log(`Passageiro acompanhado: Não`);
  console.log(`Passagem comprada: Não\n`);
} else if (estaAcompanhada == true && temPassagemComprada == false) {
  console.log(`Passageiro acompanhado: Sim`);
  console.log(`Passagem comprada: Não\n`);
} else if (estaAcompanhada == false && temPassagemComprada == true) {
  console.log(`Passageiro acompanhado: Não`);
  console.log(`Passagem comprada: Sim\n`);
}

// ============ Destinos =============
console.log("========= Destinos Possíveis =========");
for(let cont = 0; cont < 3; cont++){
  if(listaDeDestinos[cont] == destino){
    var destinoExiste = true;
    break
  }else{
    destinoExiste = false;
  }
}

console.log("Destino existe: ", destinoExiste)

// Condição de compra
const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

// ============ Resultado da Compra =============
console.log("\n========= Resultado da compra =========")
if(podeComprar && destinoExiste){
  console.log("Passagem comprada com sucesso. Boa Viagem!")
}else{
  console.log("Desculpe, tivemos um erro.")
}


