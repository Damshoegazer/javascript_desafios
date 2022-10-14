let cont_modal = document.getElementsByClassName('container_modal')[0];
let btn_abrir = document.getElementById('carrito_btn');
let btn_cerrar = document.getElementById('carrito_cerrar');
let carrito_modal = document.getElementsByClassName('carrito_modal')[0];


/* abre y muestra el carrito al ser precionado el botón */
btn_abrir.addEventListener('click', ()=>{
    cont_modal.classList.toggle('modal-active');
});

/* permite cerrar el modal a traves del botón superior*/
btn_cerrar.addEventListener('click', ()=>{
    cont_modal.classList.toggle('modal-active');
});

/* hace que el modal aparezca y permite cerralo clickeando fuera del contenedor  */
cont_modal.addEventListener('click', (event) =>{
    cont_modal.classList.toggle('modal-active');
});

/* evita que desaparezca el modal cuando hace click en cualquier lugar de su contenedor */
carrito_modal.addEventListener('click', (event) => {
    event.stopPropagation();
});