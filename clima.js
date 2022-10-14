/* seteo de la api del clima por ciudad */

let contenedor_clima = document.getElementById("clima");
let ciudad = "Buenos Aires";

fetch("https://api.openweathermap.org/data/2.5/weather?q="+ciudad+"&lang=es&units=metric&appid=f7e2da8af43775c50fe28a15d6b440cf")
.then(response => response.json())
.then( data => {
    console.log(data);
    contenedor_clima.innerHTML = `
    <span> Ciudad: ${data.name}&nbsp-&nbsp</span>
    <span> Temperatura: ${data.main.temp}`;
});