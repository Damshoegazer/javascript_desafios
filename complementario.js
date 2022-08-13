


/* SELECCIONAR COMIDAS DE UNA LISTA Y CALCULAR EL COSTO TOTAL */


let producto = "";
let total = 0;


function comprar() {
    
    while(producto != 6) {
        producto = prompt("¿Qué queres comer hoy? Ingresá el número de tu elección.\n 1.Pizza $720\n 2.Pastas $550\n 3. Hamburguesa $840\n 4. Empnadas $630\n 5. Mariscos $1100\n 6. Finalizar");
        
        switch (producto) {
            case '1':
                total += 720;
                alert("valor de la compra: " +total);
                break;

            case '2':
                total += 550;
                alert("valor de la compra: " +total);
                break;

            case '3':
                total += 840;
                alert("valor de la compra: " +total);
                break; 
            
            case '4':
                total += 840;
                alert("valor de la compra: " +total);
                break;

            case '5':
                total += 840;
                alert("valor de la compra: " +total);
                break;    
            
            case '6':
                alert("Gracias por tu compra\n Valor total de la compra: $" + total);
                break;


        }   
    }
}

comprar();