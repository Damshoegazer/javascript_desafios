
/* ____________________________________ Desafío: Incorporar eventos ____________________________________ */



/* creo un array de objetos con los productos que se venden */

let productos = [
    {id:1, nombre:"pizza", precio: 800, img:"https://i1.wp.com/irecetasfaciles.com/wp-content/uploads/2019/01/pizza-con-salami-chorizo-beacon.jpg?fit=900%2C786&ssl=1"},
    {id:2, nombre:"empanadas", precio: 920, img:"https://www.clarin.com/img/2022/05/18/l4_YPOwWP_1256x620__2.jpg#1652888600066"},
    {id:3, nombre:"pastas", precio: 500, img:"https://dcom-prod.imgix.net/files/wp-content/uploads/2017/08/1548792834-PastaBlog.png?w=1280&h=720&crop=focalpoint&fp-x=0.5&fp-y=0.1&fit=crop&auto=compress&q=75"},
    {id:4, nombre:"hamburguesa", precio: 550, img:"https://www.clarin.com/img/2021/06/17/LC25eDtCT_1256x620__1.jpg"},
    {id:5, nombre:"mariscos", precio: 700, img:"https://dam.cocinafacil.com.mx/wp-content/uploads/2022/02/tipos-de-mariscos.jpg"}
];
let carrito = [];


/* agrego los productos para que el usuario los vea */

function render_productos(){
    let html = '';
    for (let i = 0; i < productos.length; i++) {
    html = html + `
    <div onclick = "ingresar_carrito(${productos[i].id});" style= "border: 1px solid red; margin 10px;">
        <p>id: ${productos[i].id}</p>
        <p>nombre: ${productos[i].nombre}</p>
        <p>precio: ${productos[i].precio}</p>
        <p>
        <img style= "width: 200px;" src="${productos[i].img}"/>
        </p>
        
    </div>`;
    
}
    document.getElementById("div_productos").innerHTML = html;
}

function render_carrito(){
    let html = '';
    for (let i = 0; i < carrito.length; i++) {
    html = html + `
    <div style= "border: 1px solid red; margin 10px;">
        <p>id: ${carrito[i].id}</p>
        <p>nombre: ${carrito[i].nombre}</p>
        <p>precio: ${carrito[i].precio}</p>
        <p>
        <img style= "width: 200px;" src="${carrito[i].img}"/>
        </p>
        
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

function ingresar_carrito(id){
    const encontrar_productos = productos.find((it) => it.id == id);
    carrito.push(encontrar_productos);
    render_carrito();
}

function borrar_carrito(id){
    carrito.splice(id, 1);
    render_carrito();
}

render_productos();















/* ____________________________________________ Interactuar con HTML _______________________________________ */



/* let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");

btn1.addEventListener("click" , function() {
    
    console.log("seleccionaste Pastas");
})

btn2.addEventListener("click" , function() {
    
    console.log("seleccionaste Empanadas");
})
btn3.addEventListener("click" , function() {
    
    console.log("seleccionaste Mariscos");
})
btn4.addEventListener("click" , function() {
    
    console.log("seleccionaste Hamburguesas");
})
btn5.addEventListener("click" , function() {
    
    console.log("seleccionaste Pizza");
})
 */













