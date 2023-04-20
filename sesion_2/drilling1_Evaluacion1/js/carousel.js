const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('carousel__button carousel__button--right');
const prevButton = document.querySelector('carousel__button carousel__button--left');;
const dotsNav = document.querySelector('.carousel__nav')
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect();
// const slideWidth = slideSize.width;

const setSlidePosition = (slide, index) => {
    slide,style.left = slideWidth * index + 'px'; 
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classlist.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDot = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevtSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevtSlide)
})

nextButton.addEventListener('click', e => {
     const currentSlide = track.querySelector('.curent-slide');
     const nextSlide = currentSlide.nextElementSibling;

     moveToSlide(track, currentSlide, nextSlide);
})