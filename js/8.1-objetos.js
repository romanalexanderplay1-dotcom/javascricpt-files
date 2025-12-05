const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 30,
    disponible: true,
}
// Mostrar el objeto en la consola
console.log(producto);

// Acceder a las propiedades del objeto
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

// crear una llave
producto.imagen = "imagen.jpg";
console.log(producto.imagen);

// para borrar una propiedad
delete producto.disponible;

// Mostrar el objeto actualizado
console.log(producto);

//-------o---------//

const producto2 = {
    nombre2: "Tablet",
    precio2: 50,
    disponible2: true,
}
const {nombre2} = producto2;
const {precio2} = producto2;
console.log(nombre2);
console.log(precio2);
console.log(producto2);