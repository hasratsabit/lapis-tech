const smoothScroll = (() => {

    var html, body;

    //getting all anchor elements
    var links = document.querySelectorAll('.navigation__link');
   
    //getting html
    html = document.documentElement;
   
    //getting body
    body = document.body;

   
      links.forEach((link) => {
          link.addEventListener('click', triggerScroll)
          
          // // Get the logo for scroll. It has a different class from the links.
          // const logo = document.querySelector('.navigation__logo-link');
          // logo.addEventListener('click', triggerScroll);

          // const headerButton = document.querySelector('.header-button');
          // headerButton.addEventListener('click', triggerScroll);
   
          function triggerScroll() {

            // When in mobile size, remove the navbar and background when a link is clicked.
            const navBackground = document.querySelector('.navigation__background');
            const navbar = document.querySelector('.navigation__nav');

            navBackground.classList.remove('background-expanded');
            navbar.classList.remove('navbar-expanded');


              //getting current scroll position
              var scrollTop = Math.round(body.scrollTop || html.scrollTop);
              if (link.hash !== "") {
                  //preventing default anchor click behavior
                  event.preventDefault();
          
                  //getting element with id found in hash
                  var hashElement = document.getElementById(link.hash.substring(1));
                  var hashElementTop = 0;
                  var obj = hashElement;
                  while (obj.offsetParent) {
                    hashElementTop += obj.offsetTop;
                    obj = obj.offsetParent;
                  }

                  //getting element's position
                  hashElementTop = Math.round(hashElementTop);
          
                  scroll(scrollTop, hashElementTop, link.hash);
              }
          }
      })


      function scroll(from, to, hash) {
        var timeInterval = 1; //in ms
        var prevScrollTop;
        var increment = to > from ? 20 : -20;
      
        var scrollByPixel = setInterval(function() {
          //getting current scroll position
          var scrollTop = Math.round(body.scrollTop || html.scrollTop);
      
          if (
            prevScrollTop == scrollTop ||
            (to > from && scrollTop >= to) ||
            (to < from && scrollTop <= to)
          ) {
            clearInterval(scrollByPixel);
            //Add hash to the url after scrolling
            window.location.hash = hash;
          } else {
            body.scrollTop += increment;
            html.scrollTop += increment;
      
            prevScrollTop = scrollTop;
          }
        }, timeInterval);
      }


})()