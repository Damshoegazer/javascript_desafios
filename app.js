let prods_contenedor = document.getElementById('productos_div');
let container_carrito = document.getElementById('container_carrito');
let comprar_vaciar_carrito = document.getElementById('comprar');
let contador_carrito = document.getElementById('contador');
let cantidad = document.getElementById('cantidad');
let total = document.getElementById('total');

let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'));
        actualizar_carrito();
    }
});


/* seteo el botón para realizar la compra y que a su vez vacía el carrito.
Las alertas sirven para avisar al cliente cuando realizó la compra
y le advierten de que seleccione un producto en el caso que que no lo haya hecho. */

comprar_vaciar_carrito.addEventListener('click', () => {
    
    if (carrito.length === 0){
        Swal.fire({
            title: "NO HAY PRODUCTOS",
            text: "Seleccioná una comida para realizar la compra",
            icon: "error",
            confirmButtonColor: "#628601",
        });
    }

    else {
        Swal.fire({
            title: "COMPRA REALIZADA",
            text: "Acabas de realizar una compra",
            icon: "success",
            confirmButtonColor: "#628601",
        });
        
    }
    carrito.length = 0;
    actualizar_carrito();
});

/* creo un div por cada producto en mi stock para mostrarlos como cards con su respectivo boton para agregar al carrito.
los inserto en el dom para que el ususario pueda verlos y seleccionarlos */

stock_prods.forEach((producto) => {
    let div = document.createElement('div');
    div.classList.add('producto');
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <div class="cantainer_card">
    <h3>${producto.nombre}</h3>
    <p class="precio_prod">$${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton_agregar">Agregar</button>
    </div>
    `
    prods_contenedor.appendChild(div);

    let boton = document.getElementById(`agregar${producto.id}`);

/*evento que agrega el producto al carrito */

    boton.addEventListener('click', () => {

        agregar_carrito(producto.id);
        
    });
    
});

/* si el producto seleccionado se repiten le suma 1 a la cantidad,
y si no se repite lo agrega al carrito y te lo señala con un alert superior*/

let agregar_carrito = (prodId) => {
    let existe = carrito.some (prod => prod.id === prodId);

    if (existe){ 
        let prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++;
            }
        });

    } else { 
        let item = stock_prods.find((prod) => prod.id === prodId);
        carrito.push(item);
    }

    Toastify({
        text: "Producto ingresado",
        duration: 800,
        style: {
            background: "#BDFF00",
            color: "black",
            fontFamily: "roboto"
        }
        
        }).showToast();
    
    actualizar_carrito(); 
}

/*borramos un elemento a través de su indice en el array del carrito */

let quitar_producto = (prodId) => {
    let item = carrito.find((prod) => prod.id === prodId);
    let indice = carrito.indexOf(item);
    carrito.splice(indice, 1); 
    actualizar_carrito();

}

/* cuando se llama a "actualizar_carrito", el carrito queda en cero */

let actualizar_carrito = () => {
    container_carrito.innerHTML = "";

/* se crea un div por cada producto seleccionado para renderizarlo dentro del carrito y se agrega
un botón con el icono de "trash can" para poder eliminar cualquier producto del carrito */

    carrito.forEach((prod) => {
        let div = document.createElement('div');
        div.className = ('prods_seleccionados');
        div.innerHTML = `
        <img style="width: 10%;" src="${prod.img}">
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="quitar_producto(${prod.id})" class="btn_eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        container_carrito.appendChild(div);
        
        localStorage.setItem('carrito', JSON.stringify(carrito));

    });
    
    /* contador de productos */

    contador_carrito.innerText = carrito.length;

    /* contador de precios */

    total.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);

};