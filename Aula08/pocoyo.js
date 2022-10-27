console.log("Hello World")
/* console.log é um comando que vai exibir informações no console do navegador. */

var Variavel1 = 2;
// var tem o tipo de escopo global
let Variavel2 = "olá";
// let tem o tipo de escopo local
const Variavel3 = 3 + 3;
// const é de escopo global e não pode ser reescrita

console.log("A varialvel1 é igual a", Variavel1);
Variavel1 = 4;
console.log("Agora a varialvel1 é igual a", Variavel1);
console.log("O valor de varialvel2 é igual a", Variavel2);
Variavel2 = 5;
console.log("Agora o valor de varialvel2 é", Variavel2)
console.log("Essa é a constante", Variavel3)
Variavel3 = 9