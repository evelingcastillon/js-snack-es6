//Snack 3:
//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
const Users = ['Daniela', 'Ricardo', 'Angela','Junior','Alessandra'];
let a = 1;
let b = 3; 

//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
/* function limitiArray(array, max, min){
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
        if(min <= i && max >= i) {
            newArray.push(array[i])
        }
    }
    return newArray;
}

let newUsers = limitiArray(Users, b, a)
console.log(newUsers);
 */
//Usiamo i nuovi metodi degli array foreach o filter.

Users.forEach((element, index, array) => {
    console.log(element, index, array);
})