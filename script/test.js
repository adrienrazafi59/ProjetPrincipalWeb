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
let LOGHEAD = document.querySelector(`#LOGHEAD`);



function CalculatorZ(){
    let varOne = parseInt(numA.value);
    let varTwo = parseInt(numB.value);
    

    if (isNaN(varOne) || isNaN(varTwo)){
        let msgErreurA = "<p>IL FAUT ENTRER DES CHIFFRES </p>";
        resultHTML.innerHTML = msgErreurA;
        return;
    }



    let result = varOne + varTwo;

    let msgAdd = `<p>Le résultat de l'addition des deux nombres est ${result}</p>`;

    result = varOne/varTwo;
    let msgDiv = `<p>Le résultat de la division des deux nombres est ${result}</p>`;

    result = varOne*varTwo;
    let msgMul = `<p>Le résultat de la multiplication des deux nombres est ${result}</p>`;

    resultHTML.innerHTML = msgAdd;
    resultHTML.innerHTML += msgDiv;
    resultHTML.innerHTML += msgMul;
}

LOGHEAD.addEventListener("click", CalculatorZ);