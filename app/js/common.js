var btn = document.getElementById('nav-menu__link_open');
var nav = document.getElementById('nav__content');
var close = document.getElementById('nav-list__close');
var navMenu = document.getElementById('nav__menu');
btn.addEventListener('click', function() {
    nav.classList.add('active');
    if (nav.classList.contains('active')) {
    	navMenu.classList.remove('nav__menu_closed');
    	navMenu.classList.add('nav__menu_open');
    	btn.style.backgroundColor = 'rgb(58, 179, 166)';
    }
});
close.addEventListener('click', function() {
    nav.classList.remove('active');
    navMenu.classList.remove('nav__menu_open');
    navMenu.classList.add('nav__menu_closed');
    btn.style.backgroundColor = 'transparent';
});
