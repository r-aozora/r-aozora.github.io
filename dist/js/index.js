// Nav Fixed & Back to Top
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav) {
        header.classList.add('nav-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('nav-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// Menu
const menu = document.querySelector('#menu');
const navMenu = document.querySelector('#nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('menu-active');
    navMenu.classList.toggle('hidden');
});

window.addEventListener('click', function(e) {
    if(e.target != menu && e.target != navMenu) {
        menu.classList.remove('menu-active');
        navMenu.classList.add('hidden');
    }
});

// Theme Toggle
const themeToggle = document.querySelector('#theme-toggle');
const html = document.querySelector('html');

themeToggle.addEventListener('click', function(){
    if (themeToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggle.checked = true;
} else {
    themeToggle.checked = false;
}