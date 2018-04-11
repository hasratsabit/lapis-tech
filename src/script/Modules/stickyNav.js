const stickyNav = (() => {

    function debounce(func, wait = 10, immediate = true) {
        var timeout;
        return function() {
          var context = this, args = arguments;
          var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      };

    const background = document.querySelector('#background');
    const logo = document.querySelector('.navigation__logo');
    const navList = document.querySelector('.navigation__list');
    const mobileLogoBg = document.querySelector('.navigation__nav-bg');
    const navLinks = document.querySelectorAll('.navigation__link');

    function fixedNav() {
        if(window.scrollY >= 100) {
            navList.classList.add('nav-list-expanded');
            logo.classList.add('logo-expanded');
            mobileLogoBg.classList.add('nav-bg-expanded');
        }else {
            navList.classList.remove('nav-list-expanded');
            logo.classList.remove('logo-expanded');
            mobileLogoBg.classList.remove('nav-bg-expanded');
        }

        navLinks.forEach((link) => {
            if(window.scrollY >= 100){
                link.classList.add('nav-links-color-changed');
            }else {
                link.classList.remove('nav-links-color-changed');
            }
        })
    }

    window.addEventListener('scroll', debounce(fixedNav))
})()