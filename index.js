const form = document.getElementById('form');
const username = document.getElementById('username');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
})

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    checkInputs(usernameValue, username, "ім'я");
    checkInputs(surnameValue, surname, "прізвище");

    if (emailValue === '') {
        setError(email, `Поле пошта не може бути порожнім`);
    }
    else if (!isValidEmail(emailValue)) {
        setError(email, 'Некоректна пошта')
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, "Поле пароль не може бути порожнім");
    } else if (passwordValue.length < 6) {
        setError(password, "Пароль має містити більше 6 цифр")
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, "Поле не може бути порожнім");
    } else if (passwordValue !== password2Value) {
        setError(password2, "Паролі не співпадають");
    } else {
        setSuccess(password2);
    }
}

const checkInputs = (value, element, name) => {
    if (value === '') {
        setError(element, `Поле ${name} не може бути порожнім`);
    } else {
        setSuccess(element);
    }
}

const setError = (input, message) => {
    const inputControl = input.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (input) => {
    const inputControl = input.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = (email) => {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
}
