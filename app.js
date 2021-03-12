generateRandomColors = () => {
	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);
	return `rgb(${r}, ${g}, ${b})`;
};
for (let i = 0; i <= 104; i++) {
	let colorContainer = document.getElementById("generated-colors");
	let randomColor = document.createElement("div");
	randomColor.classList.add("random-color");
	colorContainer.appendChild(randomColor);
}

generateColorDivs = () => {
	let randomColorDivs = document.querySelectorAll(".random-color");
	randomColorDivs.forEach((div) => {
		let color = generateRandomColors();
		div.style.background = color;
		div.innerText = color;
	});
};

const refreshButton = document.getElementById("colorGen");
refreshButton.addEventListener("click", generateColorDivs);
window.onload = () => {
	generateColorDivs();
};
