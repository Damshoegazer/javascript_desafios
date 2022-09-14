
/* ____________________________________ desafíos: Operadores avanzados y librerías ____________________________________ */





/* creo un array de objetos con los productos que se venden */

let productos = [
    {id:1, nombre:"pizza", precio: 800, img:src="./assets/pizza_1.jpg"},
    {id:2, nombre:"empanadas", precio: 920, img:src="./assets/empanadas_1.jpg"},
    {id:3, nombre:"pastas", precio: 500, img:src="./assets/pastas_1.jpg"},
    {id:4, nombre:"hamburguesa", precio: 550, img:src="./assets/hamburguesas_1.jpg"},
    {id:5, nombre:"mariscos", precio: 700, img:src="./assets/masriscos_1.jpg"}
];


let carrito = [];

/* hago un Spread de objetos y los muestro por consola */

const cantidad = {
    porciones: "individuales",
    tipo: "delivery"
}


const comidas = {
    ...productos,
    ...cantidad
    
};

console.log(comidas);


/* agrego los productos a la lista*/

function render_productos(){
    let html = '';
    for (let i = 0; i < productos.length; i++) {
    html = html + `
    <div class="div_product" onclick = "ingresar_carrito(${productos[i].id});" ">
        <p>
        <img style= "width: 200px;" src="${productos[i].img}"/>
        </p>
        <p>${productos[i].nombre}</p>
        <p>$${productos[i].precio}</p>
        <div class="boton_ingresar" style= "text-align: center;"><h5>COMPRAR</h5></div>
        
    </div>`;
    
}
    document.getElementById("div_productos").innerHTML = html;
}


/* seteo el CARRITO donde irán los productos que seleccione el usuario */

function render_carrito(){
    let html = '';
    for (let i = 0; i < carrito.length; i++) {
    html = html + `
    <div class="div_carrito">
        <p>
        <img style= "width: 120px;" src="${carrito[i].img}"/>
        </p>
        <p>${carrito[i].nombre}</p>
        <p>$${carrito[i].precio}</p>
        <span style= "cursor: pointer;" onclick = "borrar_carrito(${i});" > <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5H3H19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17 5V19C17 19.5304 16.7893 20.0391 16.4142 20.4142C16.0391 20.7893 15.5304 21 15 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5M6 5V3C6 2.46957 6.21071 1.96086 6.58579 1.58579C6.96086 1.21071 7.46957 1 8 1H12C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8 10V16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 10V16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
        </span>
    </div>`;
    
}
    document.getElementById("div_carrito").innerHTML = html;
}

/* los productos seleccionados ingresan al carrito */

function ingresar_carrito(id){
    let arreglo_JSON = JSON.stringify(carrito);
    localStorage.setItem("carrito" , arreglo_JSON);
    const encontrar_productos = productos.find((it) => it.id == id);
    carrito.push(encontrar_productos);

    /* le agrego un alert que le comunica al usuario que ha seleccionado un producto */

    Toastify({
        text: "Producto ingresado",
        duration: 800,
        style: {
            background: "#BDFF00",
            color: "black",
            fontFamily: "roboto"
        }
        
        }).showToast();

    render_carrito();
}


/* funcion que permite al usuario borrar los productos que desea*/

function borrar_carrito(id){
    carrito.splice(id, 1);

    /* agrego una alerta que le confirma al usuario la eliminacion de un producto del carrito */
    Swal.fire({
        title: "ELIMINADO",
        text: "Acabas de eliminar un producto del carrito",
        icon: "success",
        confirmButtonColor: "#BDFF00",
        
    });

    render_carrito();
}

render_productos();

console.log(carrito);






