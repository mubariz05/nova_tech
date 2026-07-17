const burgerBtn = document.getElementById('burgerBtn');
const nav = document.querySelector('.nav');

burgerBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
    });
});

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!fullname || !email || !message) {
        alert('Zəhmət olmasa bütün xanaları doldurun.');
        return;
    }

    console.log('Form göndərildi:', { fullname, email, message });

    alert('Təşəkkür edirik, ' + fullname + '! Mesajınız uğurla göndərildi.');
    contactForm.reset();
});