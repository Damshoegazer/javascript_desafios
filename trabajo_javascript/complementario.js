

/* 1)Pide al usuario que ingrese su nombre y luego mostrar su nombre tres veces. */

let nombre_usuario = prompt("Ingrese su nombre y será repetido");

for (let i=0; i<3; i++) {

    console.log(nombre_usuario);
}


/* 2)Modifique el programa anterior para que le pida al usuario que ingrese su nombre y una cantidad(numero), luego mostrar su nombre esa cantidad de veces */

nombre_usuario = prompt("Ingrese su nombre y será repetido");

let cantidad = parseInt(prompt("Ingrese un numero"));

for (let i=0; i<cantidad; i++) {

    console.log(nombre_usuario);
}

/* comprobando el funcionamiento de github */