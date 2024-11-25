//console.log("Hello World");

//let userName = "DonmaiMan";
//let age = 22;
//let size = 1.80;
//let isCool = true;

//console.log(userName,"is",size,"meters tall and is cool =",isCool);

//isCool = false;

//console.log(userName, "is cool =" ,isCool);

//console.log(userName, "'s real size is", size-.05, "meters");

//let a = 34;
//let b = 98;

//console.log(a-b, a+b, a*b, a/b, a%b);

let resultHTML = document.querySelector('#result');
console.log(resultHTML);

let varOne = parseInt(prompt("Entrer un chiffre"));

while (isNaN(varOne)){
    console.log("Il faut entrer un nombre wallah");
    varOne = parseInt(prompt("Entrer un chiffre"));
}
console.log(varOne);

let varTwo = parseInt(prompt("Entrer un chiffre"));

while (isNaN(varTwo)){
    console.log("Il faut entrer un nombre wallah");
    varTwo = parseInt(prompt("Entrer un chiffre"));
}
console.log(varTwo);

let result = varOne + varTwo;

let msgAdd = `<p>Le résultat de l'addition des deux nombres est ${result}</p>`;

result = varOne/varTwo;
let msgDiv = `<p>Le résultat de la division des deux nombres est ${result}</p>`;

result = varOne*varTwo;
let msgMul = `<p>Le résultat de la multiplication des deux nombres est ${result}</p>`;

resultHTML.innerHTML = msgAdd;
resultHTML.innerHTML += msgDiv;
resultHTML.innerHTML += msgMul;