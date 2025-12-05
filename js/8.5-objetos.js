const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true,
    especificaciones: {}

}

const especificaciones = {
    peso: "1kg",
    marca: "Samsung",
}

producto.especificaciones = especificaciones;

console.log(producto);

