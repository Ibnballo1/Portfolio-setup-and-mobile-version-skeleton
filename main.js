let menuBar = document.getElementById('menu_bar');
let times = document.getElementById("close_menu");
let hamburgerBtn = document.getElementById('menuBarImg');
let closeBar = document.getElementById('close_bar');
let lists = document.getElementById("menu_list");
let blurEffect = document.querySelectorAll('.toblur');
let isDisplay = true;

menuBar.addEventListener('click', () => {
  if (isDisplay) {
    hamburgerBtn.style.display = 'none';
    times.style.display = 'block';
    closeBar.classList.add('icon-menu');
    lists.classList.add('js-nav-list');

    for (let i= 0; i < blurEffect.length; i++) {
      blurEffect[i].classList.add('blurring');
    }

    isDisplay = false;
    }
    else {
    hamburgerBtn.style.display = 'block';
    times.style.display = 'none';
    closeBar.classList.replace('icon-menu', 'nav-menu');
    lists.classList.replace('js-nav-list', 'dv-nav');

    for (let i= 0; i < blurEffect.length; i++) {
      blurEffect[i].classList.remove('blurring');
    }

    isDisplay = true;
  }
});