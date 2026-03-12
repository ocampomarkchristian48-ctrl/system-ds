let language = "en";

/* translations */

const translations = {

en:{
placeholder:"Enter your name",
enter:"Enter",
instructions:"Instructions",
instructionText:"Welcome to Mind Logic! This web game has 3 modes: Easy Mode, Normal Mode, and Hard Mode. In this game, you will answer questions related to Discrete Structures lessons such as Sets, Relations, Functions, Logic, and Probability. Each mode contains shuffled questions. You must reach at least 16 points to win the game. If your score is below 16 points, the game will restart from the beginning and all questions will be shuffled again. Good Luck!",
start:"Start Game",
selectMode:"Select Mode",
easy:"Easy Mode",
normal:"Normal Mode",
hard:"Hard Mode"
},

tl:{
placeholder:"Ilagay ang iyong pangalan",
enter:"Pumasok",
instructions:"Mga Panuto",
instructionText:"Maligayang pagdating sa Mind Logic! Ang web game na ito ay may 3 mode: Easy Mode, Normal Mode, at Hard Mode. Sa larong ito, sasagot ka ng mga tanong tungkol sa Discrete Structures tulad ng Sets, Relations, Functions, Logic, at Probability. Bawat mode ay may mga tanong na naka-shuffle. Kailangan mong makakuha ng hindi bababa sa 16 puntos upang manalo. Kapag ang iyong score ay mas mababa sa 16, magsisimula muli ang laro at muling hahaluin ang mga tanong. Good Luck!",
start:"Simulan ang Laro",
selectMode:"Pumili ng Mode",
easy:"Madali",
normal:"Katamtaman",
hard:"Mahirap"
}

};


/* language switch */

function setLang(lang){

language = lang;

document.getElementById("playerName").placeholder = translations[lang].placeholder;
document.getElementById("enterBtn").innerText = translations[lang].enter;

document.getElementById("instructionTitle").innerText = translations[lang].instructions;
document.getElementById("instructionText").innerText = translations[lang].instructionText;

document.getElementById("startBtn").innerText = translations[lang].start;

document.getElementById("modeTitle").innerText = translations[lang].selectMode;
document.getElementById("easyBtn").innerText = translations[lang].easy;
document.getElementById("normalBtn").innerText = translations[lang].normal;
document.getElementById("hardBtn").innerText = translations[lang].hard;

}


/* enter button */

function enterGame(){

let name = document.getElementById("playerName").value;

if(name===""){

if(language==="en"){
alert("Please enter your name");
}else{
alert("Pakilagay ang iyong pangalan");
}

return;

}

document.getElementById("menu").style.display="none";
document.querySelector(".title").style.display="none";
document.getElementById("instructions").classList.remove("hidden");

}


/* show mode selection */

function showModes(){

document.getElementById("instructions").style.display="none";
document.getElementById("modes").classList.remove("hidden");

}


/* floating math symbols */

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
