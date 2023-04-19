const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', navToggle);

function navToggle() {
  menuBtn.classList.toggle('open');
  mobileMenu.classList.toggle('flex');
  mobileMenu.classList.toggle('hidden');
}
