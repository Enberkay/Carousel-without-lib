//กำหนด slideIndex เป็น 1
let slideIndex = 1;

let autoSlideInterval;

// fuction สำหรับกดเปลี่ยน slides
function plusSlides(n){
    showSlides(slideIndex += n);
}

// fuction สำหรับ dot เปลี่ยน slides
function currentSlide(n){
    showSlides(slideIndex = n);
}

//fuction สำหรับแสดงรูปภาพ slides
function showSlides(n){
    let slides = document.getElementsByClassName("mySlides")
    let dots = document.getElementsByClassName("dot")

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1){
        slideIndex = slides.length;
    }

    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }


    //slideIndex - 1 = 0, first img
    //slideIndex + 0 = 1, second img
    //slideIndex + 1 = 2, third img
    //slideIndex + 2 = 3, fourth img
    slides[slideIndex-1].style.display = 'block';

    dots[slideIndex-1].className += " active";
}
function startAutoSlide() {
    autoSlideInterval = setInterval(function() {
        plusSlides(1);
    }, 3000); // 2 seconds interval, adjust as needed
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

showSlides(slideIndex);
startAutoSlide();