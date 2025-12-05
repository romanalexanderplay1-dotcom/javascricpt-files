const carrito = [
{nombre: 'monitor de 20 pulgadas', precio: 500},
{nombre: 'television de 50 pulgadas', precio: 700},
{nombre: 'tablet', precio: 300},
{nombre: 'audifonos', precio: 200},
{nombre: 'teclado', precio: 50},
{nombre: 'celular', precio: 500},
];



carrito.forEach( function(producto) {
    console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}`);
} )