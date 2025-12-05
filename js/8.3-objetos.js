"use strict"
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: "300",
    disponible: true,

}
console.log(producto);

Object.freeze(producto);

producto.disponible = false;
console.log(producto);

console.log(Object.isFrozen(producto));
console.log(producto);

