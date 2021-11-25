'use strict';

const navbar = document.querySelector('.navbar');
const navbarMenu = document.querySelector('.navbar__menu');
const navbarMenuRect = navbar.getBoundingClientRect();
const navbarHeight = navbarMenuRect.height;
// 메뉴바 클릭시 해당 태그로 이동
navbarMenu.addEventListener('click', (e) => {
  e.preventDefault();
  const target = e.target;
  const link = target.dataset.link;
  const chosen = document.querySelector(link);
  chosen.scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('scroll', (e) => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar-dark');
  } else {
    navbar.classList.remove('navbar-dark');
  }
});
