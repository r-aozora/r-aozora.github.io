// Nav Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('nav-fixed');
    } else {
        header.classList.remove('nav-fixed');
    }
}

// Menu
const menu = document.querySelector('#menu');
const navMenu = document.querySelector('#nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('menu-active');
    navMenu.classList.toggle('hidden');
});