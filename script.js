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

    
//filtro de trabajos

const filter = document.querySelector(".filter-sub");
const main = document.querySelector("main");
const clear = document.querySelector(".clear");
const header = document.querySelector("header");

let closes = [];
let arr = [];

(async function(){
    let res = await fetch('./data.json');
    let data = await res.json();
    
    for (let curr of data){
        const container = document.createElement('div');
        container.classList.add('container');
        container.innerHTML = `
        <img src="${curr.logo}" alt="logo" />
        <div class="head">
            <div class="wrapper">
                <div class="top">
                    <h2>${curr.company}</h2>
                    <div class="stat"></div>
                </div>
                <a href="#">${curr.position}</a>
                <ul class="availability">
                    <li>${curr.postedAt}</li>
                    <li>${curr.contract}</li>
                    <li>${curr.location}</li>
                </ul>
            </div>
            <hr />
            <div class="tags"></div>
        </div>
        `;

        if (curr.new) {
            const span = document.createElement("span");
            span.classList.add("new");
            span.textContent = "New!";
            container.querySelector(".stat").appendChild(span);
        }

        if (curr.featured) {
            container.classList.add("featured");
            const span = document.createElement("span");
            span.classList.add("feature");
            span.textContent = "Featured";
            container.querySelector(".stat").append(span);
          }
      
          let types = curr.position.split(" ");
      
          const btn1 = document.createElement("button");
          btn1.dataset.type = curr.role;
          btn1.textContent = curr.role;
          container.querySelector(".tags").appendChild(btn1);
      
          const btn2 = document.createElement("button");
          btn2.dataset.type = curr.level;
          btn2.textContent = curr.level;
          container.querySelector(".tags").appendChild(btn2);
      
          for (let l of curr.languages) {
            const btn = document.createElement("button");
            btn.dataset.type = l;
            btn.textContent = l;
            container.querySelector(".tags").appendChild(btn);
          }
      
          for (let t of curr.tools) {
            const btn = document.createElement("button");
            btn.dataset.type = t;
            btn.textContent = t;
            container.querySelector(".tags").appendChild(btn);
          }
      
          main.appendChild(container);
        }
      
        const buttons = main.querySelectorAll(".tags button");
        buttons.forEach((button) => {
          button.addEventListener("click", () => {
            filterType(button.dataset.type);
            updateContainer();
          });
        });
      })();
      
      clear.addEventListener("click", () => {
        arr = [];
        filter.innerHTML = "";
        main
          .querySelectorAll(".container")
          .forEach((container) => container.classList.remove("remove"));
        filter.closest(".filter").style.display = "none";
      });
      
      function addFilter() {
        filter.innerHTML = "";
        for (let i of arr) {
          const el = document.createElement("div");
          el.classList.add("span");
          el.innerHTML = `
            <p>${i}</p>
            <button aria-label="remove button">
              <img src="assets/icon-remove.svg" alt="remove" />
            </button>
          `;
          filter.appendChild(el);
          filter.closest(".filter").style.display = "flex";
      
          closes = [];
          closes.push(el.querySelector("button"));
          closes.forEach((close) => {
            close.addEventListener("click", () => {
              filter.removeChild(close.closest(".span"));
              arr.splice(arr.indexOf(close.previousElementSibling.textContent), 1);
              updateContainer();
              if (filter.innerHTML) {
                filter.closest(".filter").style.display = "flex";
              } else {
                filter.closest(".filter").style.display = "none";
              }
            });
          });
        }
      }
      
      function filterType(type) {
        if (!arr.includes(type)) {
          arr.push(type);
          addFilter();
        }
      }
      
      function updateContainer() {
        const containers = main.querySelectorAll(".container");
        containers.forEach((container) => {
          const buttons = container.querySelectorAll("button");
          let check = [];
          for (let i of buttons) {
            check.push(i.dataset.type);
          }
      
          let include = true;
          for (let j of arr) {
            if (!check.includes(j)) {
              include = false;
            }
          }
      
          if (!include) {
            container.classList.add("remove");
          } else {
            container.classList.remove("remove");
          }
        });
      }
      
      
      window.onresize = changeBg;
