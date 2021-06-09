let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
} 

let prodTitle = document.getElementsByClassName("title");

let marca = document.getElementById('marca');
let an = document.getElementById('an');
let combustibil = document. getElementById('combustibil');

marca.addEventListener('click', function (){
        for (let el of prodTitle) {
            for (i = 0; i < document.getElementById('marca').children.length; i++) {
                if (el.textContent === marca.value) {
                    el.parentNode.style.display = 'flex';
                        
                } else {
                    el.parentNode.style.display = 'none';
                   };
            };
            if (marca.value == 'null') {el.parentNode.style.display = 'flex'};
            };
})

let burger = document.getElementById('burger')

burger.addEventListener('click', function (){
    let headings = document.getElementById('headings');
    let menu = document.getElementById('menu');

    if (headings.style.display === 'flex') {
        headings.style.display = 'none';
        menu.style.height = '5rem'
    } else {
        headings.style.display = 'flex';
        menu.style.height = '12rem'
    }
})