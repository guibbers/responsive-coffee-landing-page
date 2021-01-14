const navMenu = document.querySelector('#nav-menu');
const toggleMenu = document.querySelector('#nav-toggle');
const closeMenu = document.querySelector('#nav-close');

toggleMenu.addEventListener('click', () => {
   navMenu.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
   navMenu.classList.remove('show');
});