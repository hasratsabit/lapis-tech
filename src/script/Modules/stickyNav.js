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

    function fixedNav() {
        if(window.scrollY >= 100) {
            navList.classList.add('nav-list-expanded');
            logo.classList.add('logo-expanded');
        }else {
            navList.classList.remove('nav-list-expanded');
            logo.classList.remove('logo-expanded');
        }
    }

    window.addEventListener('scroll', debounce(fixedNav))
})()