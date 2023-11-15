
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// constante lié a la bannière, aux flèches et aux points 
const bannerImg = document.querySelector('.banner-img')
const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.querySelector('.arrow_right')
const dots = document.querySelectorAll('.dot') 

// constante lié à l'image
const imgSlide = `assets/images/slideshow/${slides[currentIndex].jpg}`
bannerImg.src = imgSlide
bannerImg.alt = `slide ${currentIndex + 1} `

// constante lié a la tagLine
const tagLine = slides[currentIndex].tagLine
document.querySelector('p').innerHTML = tagLine

// Paramètre de démarrage de l'index
let currentIndex = 0

