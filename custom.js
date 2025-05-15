document.addEventListener('DOMContentLoaded', function() {
  const fadeInElements = document.querySelectorAll('.fade-in');

  function onScroll() {
    fadeInElements.forEach(element => {
      const rect = element.getBoundingClientRect();

      if (rect.top < window.innerHeight && !element.classList.contains('is-visible')) {
        element.classList.add('is-visible');
      }

      if (rect.top > window.innerHeight || rect.bottom < 0) {
        element.classList.remove('is-visible');
      }
    });
  }

  window.addEventListener('scroll', onScroll);
  onScroll();
});

document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.header__menu'); 
    const burgerButton = document.querySelector('.header__burger'); 
    const closeButton = burgerButton.querySelector('div'); 

    burgerButton.addEventListener('click', function() {
        menu.classList.toggle('is-visible');
        
        if (menu.classList.contains('is-visible')) {
            closeButton.classList.add('close'); 
        } else {
            closeButton.classList.remove('close');
        }
    });

    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('is-visible'); 
            closeButton.classList.remove('close'); 
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.clients__button button');
  const clientsGrid = document.querySelector('.clients__grid');

  toggleButton.addEventListener('click', function () {
    const isExpanded = clientsGrid.classList.toggle('show-all');
    toggleButton.textContent = isExpanded ? 'Hide Clients' : 'All Clients';
  });
});
