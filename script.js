const burgerBtn = document.getElementById('burgerBtn');
const nav = document.getElementById('headerNav');

burgerBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('header__nav--open');
    burgerBtn.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('.header__nav-link').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('header__nav--open');
        burgerBtn.setAttribute('aria-expanded', 'false');
    });
});

const contactForm = document.getElementById('contactForm');

const fullnameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const fullnameError = document.getElementById('fullnameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formSuccess = document.getElementById('formSuccess');

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setError(input, errorEl, message) {
    errorEl.textContent = message;
    input.classList.toggle('form__input--invalid', Boolean(message));
    input.classList.toggle('form__textarea--invalid', Boolean(message) && input.tagName === 'TEXTAREA');
}

function validateFullname() {
    const value = fullnameInput.value.trim();
    if (!value) {
        setError(fullnameInput, fullnameError, 'Ad və soyad boş ola bilməz.');
        return false;
    }
    if (value.length < 3) {
        setError(fullnameInput, fullnameError, 'Ad və soyad ən azı 3 simvol olmalıdır.');
        return false;
    }
    setError(fullnameInput, fullnameError, '');
    return true;
}

function validateEmail() {
    const value = emailInput.value.trim();
    if (!value) {
        setError(emailInput, emailError, 'Elektron poçt boş ola bilməz.');
        return false;
    }
    if (!EMAIL_REGEX.test(value)) {
        setError(emailInput, emailError, 'Zəhmət olmasa düzgün e-mail formatı daxil edin.');
        return false;
    }
    setError(emailInput, emailError, '');
    return true;
}

function validateMessage() {
    const value = messageInput.value.trim();
    if (!value) {
        setError(messageInput, messageError, 'Mesaj boş ola bilməz.');
        return false;
    }
    if (value.length < 10) {
        setError(messageInput, messageError, 'Mesaj ən azı 10 simvol olmalıdır.');
        return false;
    }
    setError(messageInput, messageError, '');
    return true;
}

fullnameInput.addEventListener('input', validateFullname);
emailInput.addEventListener('input', validateEmail);
messageInput.addEventListener('input', validateMessage);

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    formSuccess.textContent = '';

    const isFullnameValid = validateFullname();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (!isFullnameValid || !isEmailValid || !isMessageValid) {
        return;
    }

    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    console.log('Form göndərildi:', { fullname, email, message });

    formSuccess.textContent = 'Təşəkkür edirik, ' + fullname + '! Mesajınız uğurla göndərildi.';
    contactForm.reset();
});