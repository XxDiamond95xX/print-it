const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const left = document.querySelector(`.arrow_left`);
const right = document.querySelector(`.arrow_right`);
const dots = document.querySelector(`.dot`);
const bannerImg = document.querySelector(`.banner-img`);


left.addEventListener("click", function() {
	console.log("clic sur fleche de gauche")
});

right.addEventListener("click", function() {
	console.log("clic sur fleche de droite")
});

let position = 0;


