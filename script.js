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

/* Si el ancho de la página es menor a 760px, ocultará el menú al reargar la página. */
 
if (window.innerWidth > 760){
    body.classList.add("body_move");
    side_menu.classList.add("menu__sidebar_move");
}

//Haciendo el menu responsive

/* window.addEventListener("resize", function()){
    if (window.innerWidth > 760){
            body.classList.add("body_move");
            side_menu.classList.add("menu__sidebar_move");
        }else{
            body.classList.remove("body_move");
            side_menu.classList.remove("menu__sidebar_move");
        }
} */