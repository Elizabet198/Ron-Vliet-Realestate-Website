// JavaScript Document
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.getElementById('navbar');

hamburgerMenu.addEventListener('click', () => {
  navList.classList.toggle('active');
  hamburgerMenu.classList.toggle('active');
});
