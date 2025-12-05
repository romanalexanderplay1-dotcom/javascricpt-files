const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,  
    disponible: true,
    mostrarInfo: function() {
        return `El producto es: ${this.nombre} y el precio es de: $${this.precio}`;
    }
}

console.log(producto.mostrarInfo());