

/* --------------------------------  PRIMER ENTREGA PROYECTO FINAL ------------------------------------ */


/* creo una clase con objetos, para cargar los productos */


class Comidas{
    constructor(nombre, porciones, precio){
        this.nombre = nombre;
        this.porcion = porciones;
        this.precio = precio;
    }
    
}

/* inicializo arrays para las categorias de los productos */

const pizza = [];
const pasta = [];
const hamburguesa = [];
const empanadas = [];
const mariscos = [];

/* genero nuevas instancias para cargar los productos */

pizza.push(new Comidas("Pizza", 8, 720));
pasta.push(new Comidas("Pasta", 1, 550));
hamburguesa.push(new Comidas("Hamburguesa", 1, 840));
empanadas.push(new Comidas("Empanadas", 1, 630));
mariscos.push(new Comidas("Mariscos", 1, 1100));


/* muestro los productos por consola */

console.log(pizza);
console.log(pasta);
console.log(hamburguesa);
console.log(empanadas);
console.log(mariscos);


/* muestro el incremento del precio por packaging plastico  con un FOREACH*/

let packaging = 200;

let total_con_packaging = 0;

function comidas_precios_packaging () {
    total_con_packaging = [720, 550, 840, 630, 1100];

total_con_packaging.forEach( function(num){
    console.log("precios con packaging especial",  num + packaging);

})

}

comidas_precios_packaging();

console.log("_____________________________________________");

let total = 0;
let ingresar_comida = "";
let carrito1 = [];


/* le muestro a los compradores los productos para escoger*/

function cuenta(){

while(ingresar_comida != 6) {
    ingresar_comida = prompt("1. Pizza $720\n, 2. Pasta $550\n, 3. Hamburguesa $840\n, 4. Empanadas $630\n, 5. Mariscos $1100\n, 6. FINALIZAR");

    if (ingresar_comida == 1) {
        console.log("Pizza $720", total = total + 720 + packaging);
        carrito1.push("Pizza $720 + $200"); 
        alert("Seleccionaste PIZZA $720");
    }
    else if (ingresar_comida == 2) {
        console.log("Pastas $550", total = total+  550 + packaging);
        carrito1.push("Pasta $550 + $200"); 
        alert("Seleccionaste PASTA $550")
    }
    else if (ingresar_comida == 3) {
        console.log("Hamburguesa $840", total = total + 840 + packaging);
        carrito1.push("Hamburguesa $840 + $200");
        alert("Seleccionaste HAMBURGUESA $840")
    }
    else if (ingresar_comida == 4) {
        console.log("Empanadas $630", total = total + 630 + packaging);
        carrito1.push("Empanadas $630 + $200")
        alert("Seleccionaste PASTA $630")
    }
    else if (ingresar_comida == 5) {
        console.log("Mariscos $1100", total = total + 1100 + packaging);
        carrito1.push("Mariscos $1100 + $200");
        alert("Seleccionaste PASTA $1100")
    }
    else if (ingresar_comida == 6) {
        console.log("tu pedido total es: $" ,total);
        break;
    }
    else {
        alert("EL NÚMERO NO ES VÁLIDO,\n Vuelva a ingresar un número");
    }
}

}

/* muestro el total de la compra y el carrito con sus productos */

cuenta();
console.log("_________________________________________________________________");
console.log("TU CARRITO:", carrito1);










/* ---------------------------- *//* DESAFÍO: INCORPORANDO ARRAYS *//* --------------------------- */

/* creo una clase con objetos, para cargar los productos */

/* class Comidas{
    constructor(nombre, porciones, precio){
        this.nombre = nombre;
        this.porcion = porciones;
        this.precio = precio;
    }
    
} */

/* inicializo arrays para las categorias de los productos */

/* const pizza = [];
const pasta = [];
const hamburguesa = [];
const empanadas = [];
const mariscos = [];
 */

/* genero nuevas instancias para cargar los productos */
/* 
pizza.push(new Comidas("Pizza", 8, 720));
pasta.push(new Comidas("Pasta", 1, 550));
hamburguesa.push(new Comidas("Hamburguesa", 1, 840));
empanadas.push(new Comidas("Empanadas", 1, 630));
mariscos.push(new Comidas("Mariscos", 1, 1100));


console.log(pizza);
console.log(pasta);
console.log(hamburguesa);
console.log(empanadas);
console.log(mariscos);

let ingresar_comida = "";
let total = 0; */


/* le muestro a los compradores los productos para escoger */

/* function cuenta(){

while (ingresar_comida != 6) {
    ingresar_comida = prompt("1. Pizza $720 , 2. Pasta $550 , 3. Hamburguesa $840 , 4. Empanadas $630 , 5. Mariscos $1100 , 6. FINALIZAR");

    switch (ingresar_comida) {

        case '1':
            total += 720;
            alert("valor de la compra: " + total);
            break;

        case '2':
            total += 550;
            alert("valor de la compra: " + total);
            break;    

        case '3':
            total += 840
            alert("valor de la compra: " + total);
            break;
    
        case '4':
            total += 840
            alert("valor de la compra: " + total);
            break; 

        case '5':
            total += 840
            alert("valor de la compra: " + total);
            break; 

        case '6': 
            alert("Gracias por tu compra Tu total: " + total);
            break;     

}     
}
}

cuenta(); */


/* muestro el total de la compra por consola */

/* let carro = [ingresar_comida.length + total - 1];

console.log("total de la compra : " + carro); */



