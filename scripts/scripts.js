let edad = prompt("Por favor, ingresa tu edad:");
if (edad >= 18) {alert("Eres mayor de edad. Puedes acceder al contenido.");
} else 
{alert("Eres menor de edad. No puedes acceder al contenido.");
}

let frutasConPrecios = {
    "Manzana": 500,
    "Banana": 200,
    "Naranja": 300,
    "Fresa": 50,
    "Pera": 500,
    "Kiwi": 900,
    "Uva": 50,
    "Mango": 1000,
    "Cereza": 20,
    "Piña": 3000
};

let frutas = Object.keys(frutasConPrecios);

let mensaje = "Selecciona una fruta ingresando el número correspondiente:\n";
for (let i = 0; i < frutas.length; i++) {
    mensaje += (i + 1) + ". " + frutas[i] + "\n";
}

let eleccion = parseInt(prompt(mensaje));

if (!isNaN(eleccion) && eleccion >= 1 && eleccion <= frutas.length) {
    let frutaElegida = frutas[eleccion - 1];
    let precioFruta = frutasConPrecios[frutaElegida];
    alert("Has seleccionado la fruta: " + frutaElegida + "\nPrecio: $" + precioFruta.toFixed(2));
} else {
    alert("Elección no válida. Por favor, ingresa un número válido.");
}