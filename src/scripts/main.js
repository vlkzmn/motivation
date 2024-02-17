'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body--with-menu');
  } else {
    document.body.classList.remove('body--with-menu');
  }
});

const arrowUp = document.querySelector('.footer__up-arrow');

window.addEventListener('scroll', function() {
  if (
    document.body.scrollTop > 500
    || document.documentElement.scrollTop > 500
  ) {
    arrowUp.classList.add('footer__up-arrow--show');
  } else {
    arrowUp.classList.remove('footer__up-arrow--show');
  }
});
