const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');

menuBtn.addEventListener('click', navToggle);
linkForm.addEventListener('submit', formSubmit);

function navToggle() {
  menuBtn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
}

function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );

  return !!pattern.test(str);
}

function formSubmit(e) {
  e.preventDefault();

  if (input.value === '' || !validURL(input.value)) {
    errMsg.innerHTML = 'Please enter a valid URL';
    input.classList.add('border-red');
  } else {
    errMsg.innerHTML = '';
    input.classList.remove('border-red');
  }
}
