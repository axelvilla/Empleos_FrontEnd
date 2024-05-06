document.getElementById('signupBtn').addEventListener('click', signup);

function signup(){
    let name = document.getElementById('nameField').value;
    let email = document.getElementById('email-field').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('El correo electrónico ingresado no es válido.');
        return;
    }
  
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }else{
        alert('Registro Exitoso!');
        window.location.href = '../../index.html';
    }
}



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

































