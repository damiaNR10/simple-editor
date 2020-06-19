const textarea = document.querySelector('.form__textarea--js');
const loadButton = document.querySelector('.form-menu__button--load');
const saveButton = document.querySelector('.form-menu__button--save');

saveButton.addEventListener('click', () => {
    localStorage.setItem('textarea-value', textarea.value);
});

loadButton.addEventListener('click', () => {
    let value = localStorage.getItem('textarea-value');
    textarea.value = value;
});


console.log(localStorage.getItem('textarea-value'));