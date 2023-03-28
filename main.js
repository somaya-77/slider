// get images
let sliderImage = Array.from(document.querySelectorAll(".container img"));
// get count slide
let slideShowNum = document.querySelector(".slidNum");
// curren slid
let currentSlide = sliderImage.length
let number = 1;
//  get buttons
let next = document.getElementById("next")
let prev = document.getElementById("prev")

// get ul element
let ul = Array.from(document.querySelectorAll("ul li"));

function btnNext() {
    if(next.classList.contains("disabled")){

    }else{
        number++;
        theChecker()
    }
}

function btnPrev() {
    if(prev.classList.contains("disabled")){

    }else{
        number--;
        theChecker()
    }
}
next.onclick = btnNext;
prev.onclick = btnPrev;

// loop all number item
for(let i = 0; i < ul.length; i++){
    ul[i].onclick = function () {
        number = parseInt(this.getAttribute("data-index"));

        theChecker()
    }
}

function theChecker() {
    // set number the image
    slideShowNum.textContent ="slide # "+ (number) + " of " + (sliderImage.length);

    remveAllActive()

    // add class active on image
    sliderImage[number - 1].classList.add("active")

    // add class active on li item
    ul[number - 1].classList.add("active");

    // check if current slide first
    if(number == 1) {
        // add disabled class on previous button
        prev.classList.add("disabled");
    } else {
        // remove disabled class from previous button
        prev.classList.remove("disabled");
    }

    // check if current slide last
    if(number == currentSlide) {
        // add disabled class on next button
        next.classList.add("disabled");
    } else {
        // remove disabled class from next button
        next.classList.remove("disabled");
    }
}
theChecker();

// remove all active classes from images and numbers bolites
function remveAllActive() {
    // remove class active from images
    sliderImage.forEach(function (img) {
        img.classList.remove("active");
    })

    // remove class active from numbers bolites
    ul.forEach(function (num) {
        num.classList.remove("active");
    })
}
