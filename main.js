'use strict';

const navbar = document.querySelector('.navbar');
const navbarMenu = document.querySelector('.navbar__menu');
const navbarMenuRect = navbar.getBoundingClientRect();
const navbarHeight = navbarMenuRect.height;

const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;

const arrow = document.querySelector('.arrow');
// 메뉴바 클릭시 해당 태그로 이동
navbarMenu.addEventListener('click', (e) => {
  e.preventDefault();
  const target = e.target;
  const link = target.dataset.link;
  const chosen = document.querySelector(link);
  scrollInto(chosen);
});

window.addEventListener('scroll', (e) => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar-dark');
  } else {
    navbar.classList.remove('navbar-dark');
  }
});

// 스크롤 내리면 홈 투명도 주기
window.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
  if (window.scrollY > homeHeight) {
    arrow.classList.remove('hidden');
  } else {
    arrow.classList.add('hidden');
  }
});

// Arrow 버튼을 누르면 Home화면으로 이동

arrow.addEventListener('click', () => {
  scrollInto(home);
});

function scrollInto(link) {
  link.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// 프로젝트 필터링
const workBtn = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.projects');
const projects = document.querySelectorAll('.project');

workBtn.addEventListener('click', (e) => {
  const select = document.querySelector('.selected');
  const target =
    e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;

  select.classList.remove('selected');
  target.classList.add('selected');

  const filter = target.dataset.filter || target.parentNode.dataset.filter;

  projectContainer.classList.add('ani-out');
  setTimeout(() => {
    for (let i = 0; i < projects.length; i++) {
      if (filter === '*' || filter === projects[i].dataset.type) {
        projects[i].style.display = 'block';
      } else {
        projects[i].style.display = 'none';
      }
    }
    projectContainer.classList.remove('ani-out');
  }, 500);
});
