let menuBar = document.getElementById('menu_bar');
let times = document.getElementById("close_menu");
let hamburgerBtn = document.getElementById('menuBarImg');
let closeBar = document.getElementById('close_bar');
let lists = document.getElementById("menu_list");
let hiddenScrol = document.getElementById('hideOverflow');
let blurEffect = document.querySelectorAll('.toblur');
let isDisplay = true;

menuBar.addEventListener('click', () => {
  if (isDisplay) {
    hamburgerBtn.style.display = 'none';
    times.style.display = 'block';
    closeBar.classList.add('icon-menu');
    lists.classList.add('js-nav-list');
    hiddenScrol.classList.add('hide-scroll');

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
    hiddenScrol.classList.remove('hide-scroll');

    for (let i= 0; i < blurEffect.length; i++) {
      blurEffect[i].classList.remove('blurring');
    }

    isDisplay = true;
  }
});

// Pop Version of the portfolio

const data = [
  {
    title: 'Tonic',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required.`,
    linkImg: `./Images/Snapshoot-Portfolio-1.png`,
    techs: ['Html', 'CSS', 'Javascript']
  },
  {
    title: 'Multi-Post Stories',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required.`,
    linkImg: `./Images/Snapshoot-Portfolio-2.png`,
    techs: ['Html', 'CSS', 'Javascript']
  },
  {
    title: 'Tonic',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required.`,
    linkImg: `./Images/Snapshoot-Portfolio-3.png`,
    techs: ['Html', 'CSS', 'Javascript']
  },
  {
    title: 'Multi-Post Stories',
    description: `A daily selection of privately personalized reads; no accounts or sign-ups required.`,
    linkImg: `./Images/Snapshoot-Portfolio-4.png`,
    techs: ['Html', 'CSS', 'Javascript']
  }
];


