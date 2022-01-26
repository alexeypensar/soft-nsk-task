let formSelectButton = document.getElementById('formSelectButton');
let formSelect = document.getElementById('formSelect');


formSelectButton.addEventListener('click', function(btn) {
    btn.preventDefault();
    formSelect.classList.add('form__options_active');
    this.classList.add('form__button_active');



})