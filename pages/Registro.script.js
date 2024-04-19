let signupBtn = document.getElementById('signupBtn');
let signinBtn = document.getElementById('signinBtn');
let nameField = document.getElementById('nameField');
let passwordField = document.getElementById('passwordField').parentElement;
let forgotPasswordBtn = document.getElementById('forgot-password');
let title = document.getElementById('title');

signinBtn.onclick = function(){
    nameField.style.maxHeight = '0';
    passwordField.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    signupBtn.classList.add('disable');
    signinBtn.classList.remove('disable');
    forgotPasswordBtn.innerHTML = 'Forgot Password?';
}

signupBtn.onclick = function(){
    nameField.style.maxHeight = '65px';
    passwordField.style.maxHeight = '65px';
    title.innerHTML = 'Sign up';
    signupBtn.classList.remove('disable');
    signinBtn.classList.add('disable');
    forgotPasswordBtn.innerHTML = '';
}
