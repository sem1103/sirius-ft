let changedImg = document.querySelector('.changed__img');
let oneNewsImages = [
    'img/banning-drones.webp',
    'img/questions-storm.webp'
];
let indexImg = 0;
let imgTimer = setInterval(() =>{
    indexImg++;
    indexImg = indexImg > oneNewsImages.length - 1 ? 0 : indexImg;
    changedImg.setAttribute('src', oneNewsImages[indexImg]);
}, 5000)

let sliderItems = document.querySelectorAll('.federal__teretory__slider__items > div');
let prevNextBtn = document.querySelectorAll('.prevNext');
let slideCount = 0;
let dots = document.querySelectorAll('.dot');
let sliderBg = document.querySelector('.federal__teretory__slider');


prevNextBtn[0].onclick = () => changeSlide(-1);
prevNextBtn[1].onclick = () => changeSlide(0);

dots.forEach((item, index) => {
    item.onclick = () => changeSlide(index + 1);
});

function changeSlide(nextPrev) {


    slideCount = nextPrev > 0 ? nextPrev - 1 : nextPrev == 0 ? slideCount + 1 : slideCount - 1;
    slideCount = slideCount > sliderItems.length - 1 ? 0 : slideCount < 0 ? sliderItems.length - 1 : slideCount;

    sliderItems.forEach(item => item.classList.remove('active__slide'));
    dots.forEach(item => item.classList.remove('active__dot'));
    sliderItems[slideCount].classList.add('active__slide');
    dots[slideCount].classList.add('active__dot');
    sliderBg.style.opacity = 0.2;

    sliderBg.style.background = `url(../img/slider${slideCount+1}.webp) 0 center/cover`;

    setTimeout(() => {
        sliderBg.style.opacity = 1;

    }, 300);
}
