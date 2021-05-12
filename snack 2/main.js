//Snack2:
/* Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà:
nome,
punti fatti,
falli subiti. */

//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

const squadra = [
    {nome: 'Juve', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Inter', puntiFatti: 0, falliSubiti: 0},
    {nome: 'Milan', puntiFatti: 0, falliSubiti: 0}
];

//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInt(0, 30)

for (var i = 0; i < squadra.length; i++){
    let squadraElement = squadra[i];
    squadraElement.puntiFatti = getRandomInt(0,30);
    squadraElement.falliSubiti = getRandomInt(0, 30);
    console.log(squadraElement);
}

//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const [{nome},,{falliSubiti}] = squadra;
console.log(nome);