
// --------------------------------------------------------
//MENU COPIADO DESDE EL HEADER

// Ejecutar funcion en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);
//Declaramos variables

var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//Evento para mostrar y ocultar el menu
function open_close_menu(){
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu__sidebar_move");
}

/* Si el ancho de la página es menor a 760px, ocultará el menú al reCargar la página. */
 
if (window.innerWidth > 760){
    body.classList.add("body_move");
    side_menu.classList.add("menu__sidebar_move");
}

//Haciendo el menu responsive

window.addEventListener("resize", function(){
    if (window.innerWidth > 760){
        body.classList.remove("body_move");
        side_menu.classList.remove("menu__sidebar_move");
    }
    if (window.innerWidth < 760){
        body.classList.add("body_move");
        side_menu.classList.add("menu__sidebar_move");
    }

});


// ----------------------------------------------------------------------



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






























