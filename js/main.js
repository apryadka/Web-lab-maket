const $postcodeClose = document.querySelector('#post-code-close')
const $postcode = document.querySelector('.post-code')

$postcodeClose.addEventListener('click', () => {
    $postcode.style.display = 'none'
})

$('.slider').slick();
$('.tarlabakes-slider').slick({
    lazyLoad: 'ondemand',
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    prevArrow: false,
    nextArrow: false
});
