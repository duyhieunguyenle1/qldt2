if(sessionStorage.getItem('accessToken')){
    window.location.replace('../index.html')
}

const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)

const username = document.getElementById('username')
const showPassword = $('.input__icon--password-show')
const hidePassword = $('.input__icon--password-hide')
const inputPassword = $('.input__login--password')
const errorUsername = $('.input__error-username')

const validateUser = (user)=>{
    if(!user){
        return "Vui lòng nhập đầy đủ thông tin";
    }

    if(user[0]!=='b'&&user[0]!=='e'){
        return "Vui lòng nhập đúng định dạng tài khoản PTIT";
    }
    if(!Number.parseInt(user.substr(1,2))){
        return "Vui lòng nhập đúng định dạng tài khoản PTIT";
    }

    const hasNumber = /\d+/g;
    if(hasNumber.test(user.substr(3,4))){
        return "Vui lòng nhập đúng định dạng tài khoản PTIT";
    }
    if(!Number.parseInt(user.substr(7,3))){
        return "Vui lòng nhập đúng định dạng tài khoản PTIT";
    }

    return;
}

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

username.onkeyup=()=>{
    username.parentNode.classList.remove('red-border')
    errorUsername.innerHTML = "";
}

$('.login').onsubmit = (e)=>{
    e.preventDefault();
    
    const isValidatedUsername = validateUser(username.value.trim().toLowerCase())

    if(!isValidatedUsername){
        const accessToken = randomId(36);
        sessionStorage.setItem('accessToken',accessToken)
        window.location.replace('../index.html')
    }else{
        errorUsername.innerHTML = isValidatedUsername;
        username.parentNode.classList.add('red-border')
    }
}