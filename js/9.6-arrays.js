const carrito = [
{nombre: 'monitor de 20 pulgadas', precio: 500},
{nombre: 'television de 50 pulgadas', precio: 700},
{nombre: 'tablet', precio: 300},
{nombre: 'audifonos', precio: 200},
{nombre: 'teclado', precio: 50},
{nombre: 'celular', precio: 500},
];
const nuevoArray = carrito.map( function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
} );

const nuevoArray2 = carrito.forEach( function(producto) {
    console.log(` Nombre: ${producto.nombre} - Precio: ${producto.precio} `);
} );
console.log(nuevoArray);
console.log(nuevoArray2);