let language = "en";

function enterGame(){

let name = document.getElementById("playerName").value;

if(name===""){
alert("Please enter your name");
return;
}

document.getElementById("menu").style.display="none";
document.querySelector(".title").style.display="none";
document.getElementById("instructions").classList.remove("hidden");

}

function setLang(lang){

language = lang;

if(lang==="en"){
alert("Language set to English");
}

if(lang==="tl"){
alert("Wika ay Tagalog");
}

}

/* floating symbols */

const symbols = ["+", "-", "×", "÷", "π", "√", "∞", "∑"];

function createSymbol(){

let symbol = document.createElement("div");
symbol.classList.add("symbol");

symbol.innerText = symbols[Math.floor(Math.random()*symbols.length)];

symbol.style.left = Math.random()*100 + "vw";

symbol.style.animationDuration = (5 + Math.random()*10) + "s";

document.querySelector(".symbols").appendChild(symbol);

setTimeout(()=>{
symbol.remove();
},15000);

}

setInterval(createSymbol,800);
