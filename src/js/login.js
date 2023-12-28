const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)

const showPassword = $('.input__icon--password-show')
const hidePassword = $('.input__icon--password-hide')
const inputPassword = $('.input__login--password')

function randomId(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

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
    
    const accessToken = randomId(36);
    localStorage.setItem('accessToken',accessToken)

    window.location.replace('../index.html')
}