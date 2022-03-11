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

// Creating the worksection dynamically
let workSection = document.querySelector('.work-section');
let counter = 0;

data.forEach(works => {
  const {title, description, linkImg, techs} = works;

  let listOfTechs = '';
  techs.forEach(tech => {
    listOfTechs += `<li><a href="#" class="tags-link html-tag">${tech}</a></li>`;
  });

  const cardHTML = `
  <div class="work-card-${counter + 1}">
  <div class="snapshot-portfolio-${counter + 1}"></div>
  <div class="project-title">
    <h2>${title}</h2>
    <div class="frame dv-frame">
      <p class="texts text-1">CANOPY</p>
      <p class="count"></p>
      <p class="texts text-2">Back End Dev</p>
      <p class="count"></p>
      <p class="texts text-3">2015</p>
    </div>
    <p class="pry-text">${description}</p>
    <ul class="tags">${listOfTechs}</ul>
    <div class="action-btn">
      <button type="button" class="btn btn-work" data-works="${counter}">
        <span>See Project</span>
      </button>
    </div>
  </div>
</div>
  `;

  workSection.insertAdjacentHTML('beforeend', cardHTML);
  console.log(imgUrl);
  document.querySelector(`.snapshot-portfolio-${counter + 1}`).style.backgroundImage = `url("${linkImg}")`;
  //Set background image dynamically
  counter += 1;
  
});
