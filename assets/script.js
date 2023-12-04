
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
const bannerTagline = document.querySelector(".banner-tagline") 
const left = document.querySelector('.arrow_left')
const right = document.querySelector('.arrow_right') 
const dots = document.querySelector('.dots') 

let currentIndex = 0 

// boucle de création des points 
for ( i = 0; i < slides.length; i++){
    const dot = document.createElement("div")
    dot.classList.add("dot")
    dots.appendChild(dot);  

    if (currentIndex === i) {
        dot.classList.add("dot_selected");
    }
}

right.addEventListener ("click" , function() {
    currentIndex = currentIndex + 1;
    if (currentIndex === slides.length) {
        currentIndex = 0; 
    } 
    // mettre a jour le carroussel
    updateCurrentSlide();
    // Mettre à jour les points indicateurs
    updateDots();
}
); 

left.addEventListener ("click" , function() {
    currentIndex = currentIndex - 1;
    if (currentIndex === -1 ) {
        currentIndex = slides.length -1;
    } 
    // mettre a jour le carroussel
    updateCurrentSlide();
    // Mettre à jour les points indicateurs
    updateDots();
}
); 

// Fonction pour mettre à jour les points indicateurs
function updateDots() {
    const allDots = document.querySelectorAll('.dots .dot');
    allDots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

// gestion du carroussel
function updateCurrentSlide() {
    
    // MaJ de l'image
    const imgSlides = `assets/images/slideshow/${slides[currentIndex].image}`;
    bannerImg.src = imgSlides;

    // MaJ du texte
    const tagLine = slides[currentIndex].tagLine;
    bannerTagline.innerHTML = tagLine; 

}
