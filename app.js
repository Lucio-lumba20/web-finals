const data = [
  {
    cTitle: 'Mobile Development:Figma ',
    cImg: 'src="/storage/emulated/0/Lucio portfolio/img/received_381936387655343.png"',
    cTechnologies: ['Kotlin', 'Android Studio'],
    cbutton: 'See Project',
    mImage: 'src="/storage/emulated/0/Lucio portfolio/img/received_381936387655343.png" alt="" ',
    dImage: 'src="/storage/emulated/0/Lucio portfolio/img/received_381936387655343.png"',
    header: 'Android Studio: Figma',
    descrip:
      'This project is a Attendance QR Code Scanner.',
  },
  {
    cTitle: 'Java: NetBeans',
    cImg: 'src="/storage/emulated/0/Lucio portfolio/img/received_531702158939993.jpeg"',
    cTechnologies: ['Java', 'Netbeans'],
    cbutton: 'See Project',
    mImage: 'src="/storage/emulated/0/Lucio portfolio/img/received_531702158939993.jpeg" alt="" ',
    dImage: 'src="/storage/emulated/0/Lucio portfolio/img/received_531702158939993.jpeg"',
    header: 'Online Shop',
    descrip:
      'This project is a Attendance QR Code Scanner.',
  },
  {
    cTitle: 'Arduino Uno',
    cImg: 'src="/storage/emulated/0/Lucio portfolio/img/received_755171256748828.jpeg"',
    cTechnologies: ['Arduino'],
    cbutton: 'See Project',
    mImage: 'src="/storage/emulated/0/Lucio portfolio/img/received_755171256748828.jpeg" alt="" ',
    dImage: 'src="/storage/emulated/0/Lucio portfolio/img/received_755171256748828.jpeg"',
    header: 'Smart Doorlock Password',
    descrip:
      'This project is a Attendance QR Code Scanner.',
  },
  {
    cTitle: 'Final Project Portfolio',
    cImg: 'src="/storage/emulated/0/Lucio portfolio/img/Screenshot_20240510-055729.png"',
    cTechnologies: ['HTML', 'CSS','Java Script'],
    cbutton: 'See Project',
    mImage: 'src="/storage/emulated/0/Lucio portfolio/img/Screenshot_20240510-055729.png" alt="" ',
    dImage: 'src="/storage/emulated/0/Lucio portfolio/img/Screenshot_20240510-055729.png"',
    header: 'Android Studio: Personal Portfolio',
    descrip:
      'This project is a Attendance QR Code Scanner.',
  },

  
];

class Popup {
  static modal = document.querySelector('.modal');

  static overlay = document.querySelector('.overlay');

  static show(data, id) {
    Popup.modal.innerHTML = `
    <a class="clsbtn" href="#">×</a>
    <div class="imgs">
      <img class="dimg" ${data[id].dImage}>
      <img class="mimg" ${data[id].mImage}>
    </div>
    <div class="card-header">
      <h3 class="title">${data[id].header}</h3>
      <div class="buttons">
        <a class="live" href = ${data[id].live} target="_blank">See Live <img src="./images/seeliveicon.png" alt=""></a>
        <a class="source" href = ${data[id].source} target="_blank">See Source <img src="./images/Vector.png" alt=""></a>
      </div>
    </div>
    <ul class="tech">
      <li>${data[id].techs[0]}</li>
      <li>${data[id].techs[1]}</li>
      <li> ${data[id].techs[2]}</li>
    </ul>
    <p> ${data[id].descrip}</p>

`;
    Popup.modal.classList.add('active');
    Popup.overlay.classList.add('active');
  }

  static hide() {
    Popup.modal.classList.remove('active');
    Popup.overlay.classList.remove('active');
  }
}

const humb = document.querySelector('.humb');
const navMenu = document.querySelector('.nav');
const closeBtn = document.querySelector('.closebtn');
const menuElement = document.querySelector('.navL');

function active() {
  navMenu.classList.add('active');
}
function uActive() {
  navMenu.classList.remove('active');
}

humb.addEventListener('click', active);
closeBtn.addEventListener('click', uActive);
menuElement.addEventListener('click', uActive);

const portfolios = document.querySelector('#works');
data.forEach((data, id) => {
  const innerProject = document.createElement('div');
  innerProject.classList.add('card');
  innerProject.innerHTML = `
      <img ${data.cImg}">
         <div>
            <p>${data.cTitle}</p>
            <ul>
              ${data.cTechnologies.map((item) => `<li> ${item} </li>`).join('')}
            </ul>
            <button class= "see_project"id="${id}" type="button">${
  data.cbutton
}</button>
         </div>
    `;
  portfolios.appendChild(innerProject);
});

const projectnBtn = document.querySelectorAll('.card button');
projectnBtn.forEach((btn) =>
  btn.addEventListener('click', (e) => Popup.show(data, e.target.id))
);
document.addEventListener('click', (e) => {
  if (!e.target.matches('.clsbtn')) {
    return;
  }
  Popup.hide();
});
document
  .querySelector('.overlay ')
  .addEventListener('click', () => Popup.hide());

const form = document.getElementById('form');
const [username, email, message] = form.elements;

if (!localStorage.getItem('form-data')) {
  const data = { usernameValue: '', emailValue: '', messageValue: '' };
  localStorage.setItem('form-data', JSON.stringify(data));
}

const setDataInBrowser = (element, elementValue) => {
  element.addEventListener('change', () => {
    const retrivedData = JSON.parse(localStorage.getItem('form-data'));
    retrivedData[elementValue] = element.value;
    localStorage.setItem('form-data', JSON.stringify(retrivedData));
  });
};

const setDataInFormFields = (element, elementValue) => {
  element.value = elementValue;
};

document.addEventListener('DOMContentLoaded', () => {
  // set form fields data in the local storage of the browser.
  setDataInBrowser(username, 'usernameValue');
  setDataInBrowser(email, 'emailValue');
  setDataInBrowser(message, 'messageValue');
  // load form previous data from storage and set them in form field
  const data = JSON.parse(localStorage.getItem('form-data'));
  setDataInFormFields(username, data.usernameValue);
  setDataInFormFields(email, data.emailValue);
  setDataInFormFields(message, data.messageValue);
});
