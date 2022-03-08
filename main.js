let menuBar = document.getElementById('menu_bar');
let times = document.getElementById("close_menu");
let hamburgerBtn = document.getElementById('menuBarImg');
let lists = document.getElementById("menu_list");
let isDisplay = true;

menuBar.addEventListener('click', () => {
  if (isDisplay) {
    hamburgerBtn.style.display = 'none';
    times.style.display = 'block';
    menuBar.classList.add('icon-menu');
    lists.classList.add('js-nav-list');
    isDisplay = false;
    }
    else {
    hamburgerBtn.style.display = 'block';
    times.style.display = 'none';
    menuBar.classList.replace('icon-menu', 'nav-menu');
    lists.classList.replace('js-nav-list', 'dv-nav');
    isDisplay = true;
  }
});