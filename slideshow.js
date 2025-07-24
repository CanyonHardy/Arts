let slideIndex = 0;
showSlides(slideIndex);


function moveSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active-dot");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active-dot");
}

/* Auto-slide feature */
//setInterval(() => { moveSlides(1); }, 5000); // Changes slide every 5 seconds


function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0) {
        console.error("No slides found! Check image paths.");
        return;
    }

    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active-dot");
    }

    slides[slideIndex].style.display = "block"; // Show current slide
    dots[slideIndex].classList.add("active-dot");
}

