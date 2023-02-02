const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.main-navbar-2');
  const inpageNav = document.querySelector('.inpage-nav');
  const essover = document.querySelector('.essential-over')
  const back = document.querySelector('.fa-arrow-alt-circle-left')

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });

  essover.addEventListener('click', () => {
    inpageNav.classList.toggle('nav-active');
  });

  back.addEventListener('click', () => {
    inpageNav.classList.remove('nav-active');
  });

  
};

navSlide();

