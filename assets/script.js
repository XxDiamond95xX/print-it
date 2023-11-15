
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
const Left = document.querySelector('.arrow_left')
const Right = document.querySelector('.arrow_right')
const dots = document.querySelectorAll('.dot') 

let currentIndex = 0

Right.addEventListener ("click" , function() {
    currentIndex = (currentIndex + 1) ;
    Carousel(currentIndex, 'right');
    dotsUpdate(currentIndex);
    console.log("right")
}); 

Left.addEventListener ("click" , function() {
    currentIndex = (currentIndex - 1);
    Carousel(currentIndex, 'left');
    dotsUpdate (currentIndex);
    console.log("left")
}); 

// gestion des points 
function dotsUpdate (index) {dots.forEach((dot, i) => {
    if (i === index) {
        dot.classList.add('dot_selected') 
    } else {
        dot.classList.remove('dot_selected') 
    }
})}

// gestion du carroussel
function Carousel(index) {
     if (currentIndex === 4 ) {
       currentIndex = 0;}
     else if (currentIndex === -1 ) {
       currentIndex = 3;
   }

  // MaJ de l'image
  const imgSlides = `assets/images/slideshow/${slides[currentIndex].image}`;
  bannerImg.src = imgSlides;
  bannerImg.alt = `Slide ${currentIndex + 1}`;

  // MaJ de le texte
  const tagLine = slides[currentIndex].tagLine;
  document.querySelector('p').innerHTML = tagLine;
}
