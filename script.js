var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
let randomBtn = document.getElementById("random");


function setGradient() {
	let xyGradient = `linear-gradient(to right, ${color1.value}, ${color2.value})`
	// body.style.background = 
	// "linear-gradient(to right, " 
	// + color1.value 
	// + ", " 
	// + color2.value 
	// + ")";

	body.style.background = xyGradient;
	randomBtn.style.background = xyGradient;

	css.textContent = body.style.background + ";";
}



// body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
window.onload = setGradient();


function getRandomGradient() {
	let randomColor1 = '#'+ Math.floor((Math.random()*(1<<24)|0)).toString(16);
	let randomColor2 = '#'+Math.floor((Math.random()*(1<<24)|0)).toString(16);

	color1.value = randomColor1;
	color2.value = randomColor2;

	setGradient();
	css.textContent = `linear-gradient(to right, ${color1.value}, ${color2.value});`.toUpperCase();
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", getRandomGradient);