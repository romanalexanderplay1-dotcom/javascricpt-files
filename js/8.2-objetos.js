const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion2: {
        medidas: "1m",
            peso: "1kg",
}
}
 console.log(producto);

 const telefono = {
    nombre: "Telefono samsung Galaxy S10",
    precio: "300 dolares",
    disponible: true,
    informacion: {
        camara: "60mp frontal y 30 mp trasera",
        color: "negro, amarillo y celeste",
        procesador: "snapdragon",
        almacenamiento: "128gb, 64gb 32gb",
    }
}

console.log(telefono);

telefono.disponible = false;
console.log(telefono)