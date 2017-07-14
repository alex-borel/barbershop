const login = document.querySelector('.login');
const popup = document.querySelector('.modal-content');
const user = popup.querySelector('input[type=text]');
const password = popup.querySelector('input[type=password]');
const form = popup.querySelector('form');
const layer = document.querySelector('.modal-overlay');
const close = popup.querySelector('.modal-content-close');
const storage = localStorage.getItem('user');

login.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.add('modal-content-show');
    layer.classList.add('modal-content-show');
    if (storage) {
        user.value = storage;
        password.focus();
    } else {
        user.focus();
    }
});

form.addEventListener('submit', function(event) {
    if (!user.value || !password.value) {
        event.preventDefault();
        popup.classList.add('modal-error');
    } else {
        localStorage.setItem('user', user.value);
    }
})

close.addEventListener('click', function(event) {
    event.preventDefault();
    popup.classList.remove('modal-content-show');
    layer.classList.remove('modal-content-show');
    popup.classList.remove('modal-error');
})

window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27 && popup.classList.contains('modal-content-show')) {
        popup.classList.remove('modal-content-show');
        layer.classList.remove('modal-content-show');
        popup.classList.remove('modal-error');
    }
})
