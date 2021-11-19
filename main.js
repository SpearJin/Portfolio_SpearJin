'use strict';

const navbarMenu = document.querySelector('.navbar__menu');

// 메뉴바 클릭시 해당 태그로 이동
navbarMenu.addEventListener('click', (e) => {
  e.preventDefault();
  const target = e.target;
  const link = target.dataset.link;
  const chosen = document.querySelector(link);
  chosen.scrollIntoView({ behavior: 'smooth' });
});
