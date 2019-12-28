var burger = document.querySelector('.burger-btn');
var menu = document.querySelector('.main-nav');

burger.addEventListener('click', function() {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})