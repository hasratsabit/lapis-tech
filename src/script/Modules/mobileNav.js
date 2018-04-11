

const mobileNav = (() => {

    const navMenu = document.querySelector('.navigation__menu');
    const navBackground = document.querySelector('.navigation__background');
    const navbar = document.querySelector('.navigation__nav');
    
    navMenu.addEventListener("click", expandNav);
    
    function expandNav() {
        navBackground.classList.toggle('background-expanded');
        navbar.classList.toggle('navbar-expanded');
    }


})()