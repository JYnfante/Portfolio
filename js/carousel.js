/*****************/
/* CAROUSEL - 1 */
/*****************/
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

console.log(track);
console.log(slides);

// arrange the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

// when I click left, move slides to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    // move to the previous slide
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
})


// when I click right, move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    // move to the next slide
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
})

// when I click the nav indicators, move to that slide
dotsNav.addEventListener('click', e => {
    // what indicator was clicked on?
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
})


/*****************/
/* CAROUSEL - 2 */
/*****************/
const track_2 = document.querySelector('.carousel__track-2');
const slides_2 = Array.from(track_2.children);
const nextButton_2 = document.querySelector('.carousel__button-2--right');
const prevButton_2 = document.querySelector('.carousel__button-2--left');
const dotsNav_2 = document.querySelector('.carousel__nav-2');
const dots_2 = Array.from(dotsNav_2.children);

const slideWidth_2 = slides_2[0].getBoundingClientRect().width;

// arrange the slides next to one another
const setSlidePosition_2 = (slide, index) => {
    slide.style.left = slideWidth_2 * index + 'px';
}
slides_2.forEach(setSlidePosition_2);

// when I click left, move slides to the left
prevButton_2.addEventListener('click', e => {
    const currentSlide_2 = track_2.querySelector('.current-slide');
    const prevSlide_2 = currentSlide_2.previousElementSibling;
    const currentDot_2 = dotsNav_2.querySelector('.current-slide');
    const prevDot_2 = currentDot_2.previousElementSibling;
    const prevIndex_2 = slides_2.findIndex(slide_2 => slide_2 === prevSlide_2);
    // move to the previous slide
    moveToSlide(track_2, currentSlide_2, prevSlide_2);
    updateDots(currentDot_2, prevDot_2);
    hideShowArrows(slides_2, prevButton_2, nextButton_2, prevIndex_2);
})


// when I click right, move slides to the right
nextButton_2.addEventListener('click', e => {
    const currentSlide_2 = track_2.querySelector('.current-slide');
    const nextSlide_2 = currentSlide_2.nextElementSibling;
    const currentDot_2 = dotsNav_2.querySelector('.current-slide');
    const nextDot_2 = currentDot_2.nextElementSibling;
    const nextIndex_2 = slides_2.findIndex(slide_2 => slide_2 === nextSlide_2);
    // move to the next slide
    moveToSlide(track_2, currentSlide_2, nextSlide_2);
    updateDots(currentDot_2, nextDot_2);
    hideShowArrows(slides_2, prevButton_2, nextButton_2, nextIndex_2);
})

// when I click the nav indicators, move to that slide
dotsNav_2.addEventListener('click', e => {
    // what indicator was clicked on?
    const targetDot_2 = e.target.closest('button');

    if (!targetDot_2) return;

    const currentSlide_2 = track_2.querySelector('.current-slide');
    const currentDot_2 = dotsNav_2.querySelector('.current-slide');
    const targetIndex_2 = dots_2.findIndex(dot_2 => dot_2 === targetDot_2);
    const targetSlide_2 = slides_2[targetIndex_2];

    moveToSlide(track_2, currentSlide_2, targetSlide_2);
    updateDots(currentDot_2, targetDot_2);
    hideShowArrows(slides_2, prevButton_2, nextButton_2, targetIndex_2);
})

/*****************/
/* CAROUSEL - 3 */
/*****************/
const track_3 = document.querySelector('.carousel__track-3');
const slides_3 = Array.from(track_3.children);
const nextButton_3 = document.querySelector('.carousel__button-3--right');
const prevButton_3 = document.querySelector('.carousel__button-3--left');
const dotsNav_3 = document.querySelector('.carousel__nav-3');
const dots_3 = Array.from(dotsNav_3.children);

const slideWidth_3 = slides_3[0].getBoundingClientRect().width;

// arrange the slides next to one another
const setSlidePosition_3 = (slide, index) => {
    slide.style.left = slideWidth_3 * index + 'px';
}
slides_3.forEach(setSlidePosition_3);

// when I click left, move slides to the left
prevButton_3.addEventListener('click', e => {
    const currentSlide_3 = track_3.querySelector('.current-slide');
    const prevSlide_3 = currentSlide_3.previousElementSibling;
    const currentDot_3 = dotsNav_3.querySelector('.current-slide');
    const prevDot_3 = currentDot_3.previousElementSibling;
    const prevIndex_3 = slides_3.findIndex(slide_3 => slide_3 === prevSlide_3);
    // move to the previous slide
    moveToSlide(track_3, currentSlide_3, prevSlide_3);
    updateDots(currentDot_3, prevDot_3);
    hideShowArrows(slides_3, prevButton_3, nextButton_3, prevIndex_3);
})


// when I click right, move slides to the right
nextButton_3.addEventListener('click', e => {
    const currentSlide_3 = track_3.querySelector('.current-slide');
    const nextSlide_3 = currentSlide_3.nextElementSibling;
    const currentDot_3 = dotsNav_3.querySelector('.current-slide');
    const nextDot_3 = currentDot_3.nextElementSibling;
    const nextIndex_3 = slides_3.findIndex(slide_3 => slide_3 === nextSlide_3);
    // move to the next slide
    moveToSlide(track_3, currentSlide_3, nextSlide_3);
    updateDots(currentDot_3, nextDot_3);
    hideShowArrows(slides_3, prevButton_3, nextButton_3, nextIndex_3);
})

// when I click the nav indicators, move to that slide
dotsNav_3.addEventListener('click', e => {
    // what indicator was clicked on?
    const targetDot_3 = e.target.closest('button');

    if (!targetDot_3) return;

    const currentSlide_3 = track_3.querySelector('.current-slide');
    const currentDot_3 = dotsNav_3.querySelector('.current-slide');
    const targetIndex_3 = dots_3.findIndex(dot_3 => dot_3 === targetDot_3);
    const targetSlide_3 = slides_3[targetIndex_3];

    moveToSlide(track_3, currentSlide_3, targetSlide_3);
    updateDots(currentDot_3, targetDot_3);
    hideShowArrows(slides_3, prevButton_3, nextButton_3, targetIndex_3);
})