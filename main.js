const menuBar = document.getElementById('menu_bar');
const times = document.getElementById('close_menu');
const hamburgerBtn = document.getElementById('menuBarImg');
const closeBar = document.getElementById('close_bar');
const lists = document.getElementById('menu_list');
const hiddenScrol = document.getElementById('hideOverflow');
const blurEffect = document.querySelectorAll('.toblur');
let isDisplay = true;

menuBar.addEventListener('click', () => {
  if (isDisplay) {
    hamburgerBtn.style.display = 'none';
    times.style.display = 'block';
    closeBar.classList.add('icon-menu');
    lists.classList.add('js-nav-list');
    hiddenScrol.classList.add('hide-scroll');

    for (let i = 0; i < blurEffect.length; i += 1) {
      blurEffect[i].classList.add('blurring');
    }

    isDisplay = false;
  } else {
    hamburgerBtn.style.display = 'block';
    times.style.display = 'none';
    closeBar.classList.replace('icon-menu', 'nav-menu');
    lists.classList.replace('js-nav-list', 'dv-nav');
    hiddenScrol.classList.remove('hide-scroll');

    for (let i = 0; i < blurEffect.length; i += 1) {
      blurEffect[i].classList.remove('blurring');
    }

    isDisplay = true;
  }
});

// Validating form section

const form = document.getElementById('form');
const mailInput = document.getElementById('uemail');
const errorMessage = document.getElementById('errElement');

form.addEventListener('submit', (e) => {
  const showMessage = [];
  if (mailInput.value.toLowerCase() !== mailInput.value) {
    errorMessage.style.display = 'inline-block';
    showMessage.push(`
    Error: Email should be in lowercase,
    you entered ${mailInput.value}
    `);
  } else {
    form.submit();
  }
  e.preventDefault();
  errorMessage.innerText = showMessage;
});

// Local Storage Session
const userInput = document.getElementById('uname');
const msgInput = document.getElementById('message');

// Checking if data are in local storage and getting them
function getDatas() {
  if (localStorage.getItem('formField') !== null) {
    const formInput = JSON.parse(localStorage.getItem('formField'));
    userInput.value = formInput[userInput.name];
    mailInput.value = formInput[mailInput.name];
    msgInput.value = formInput[msgInput.name];
  }
}

getDatas();

const formField = {
  uname: userInput.value,
  uemail: mailInput.value,
  message: msgInput.value
};
