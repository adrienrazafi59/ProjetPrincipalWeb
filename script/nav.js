

//On récupère les id
let nav = document.querySelector('nav');
let trigger = document.querySelector('#trigger');

//Fonction qui bouge le nav
function openNav(){
    console.log('test')
    nav.style.top = "17vh";
    trigger.style.top = "-17vh";
}

//Event qui déclenche le mouvement
trigger.addEventListener("click", openNav);

function closeNav(){
    nav.style.top = "-47vh";
    trigger.style.top = "17vh";
}

nav.addEventListener("click", closeNav)