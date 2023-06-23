const form = document.querySelector('.form');
const registerLink = document.querySelector('.register_link');
const loginLink = document.querySelector('.login_link');

registerLink.addEventListener('click', ()=>{
    form.classList.add('active');
});
loginLink.addEventListener('click', ()=>{
    form.classList.remove('active');
});