


/* ---------------------------- *//* DESAFÍO: INCORPORANDO ARRAYS *//* --------------------------- */

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


console.log(pizza);
console.log(pasta);
console.log(hamburguesa);
console.log(empanadas);
console.log(mariscos);

let ingresar_comida = "";
let total = 0;


/* le muestro a los compradores los productos para escoger */

function cuenta(){

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

cuenta();


/* muestro el total de la compra por consola */

let carro = [ingresar_comida.length + total - 1];

console.log("total de la compra : " + carro);



