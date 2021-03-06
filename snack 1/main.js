/* Creare un array di oggetti, ogni oggetto descriverà
una bici da corsa con le seguenti proprietà:
nome
peso */

const bici = [
    {nome: 'bici da città', peso: 12},
    {nome: 'mountain bike', peso: 14},
    {nome: 'bici elettrica', peso: 30},
    {nome: 'bici da corsa', peso: 10},
    {nome: 'bicicletta da cicloturismo', peso: 14},
    {nome: 'bici pieghevole', peso: 16},
];

//Stampare a schermo la bici con peso minore utilizzando
//destructuring e template literal
const [primabici, , ,quartabici , ,] = bici;

console.log(primabici.peso, quartabici.peso);

let biciPesoInferiore = bici[0];
console.log(biciPesoInferiore);

for (let i = 0; i < bici.length; i++) {
    const singolaBici = bici[i];
    if(singolaBici.peso < biciPesoInferiore.peso) {
        biciPesoInferiore = singolaBici
    }
    
}
console.log(biciPesoInferiore);
/* 
const{nome, peso} = bici;
console.log(nome, peso); */