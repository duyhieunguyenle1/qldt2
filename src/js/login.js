const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)

const showPassword = $('.input__icon--password-show')
const hidePassword = $('.input__icon--password-hide')
const inputPassword = $('.input__login--password')

if(showPassword&&hidePassword&&inputPassword){
    showPassword.addEventListener('click',()=>{
        hidePassword.classList.remove('hidden')
        showPassword.classList.add('hidden')
        inputPassword.type = 'password'
    })
    
    hidePassword.addEventListener('click',()=>{
        hidePassword.classList.add('hidden')
        showPassword.classList.remove('hidden')
        inputPassword.type = 'text'
    })
}

$('.login').onsubmit = (e)=>{
    e.preventDefault();

    window.location.replace('../index.html')
}