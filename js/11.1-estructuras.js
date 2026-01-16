const carrito = {
placa: ' ',
encendido: false,
encender: function(id) { 
    console.log(`Encendiendo el carro con la placa: ${id}`)
        return this.encendido = true;
},
apagar: function() {
 console.log('Apagando el carro...')
 return this.encendido = false;
},
acelerar: function(velocidad){
    if (encendido === true) {
        console.log(`Acelerando a: ${velocidad} km/h`);
    }
    else (encendido === false); {
        console.log('El carro está apagado, no puede acelerar.');
}
},
frenar: () => console.log('Frenando el carro...'),

bajarVelocidad: (velocidad) => console.log(`Reduciendo la velocidad a: ${velocidad} km/h`),

girar: (direccion) => {
    if (direccion === 'izquierda' || direccion === 'derecha') {
        console.log(`Girando a la ${direccion}`);
    } else {
        console.log('Dirección no válida. Usa "izquierda" o "derecha".');
    }
}
}

carrito.encender('XYZ-789');
carrito.acelerar(100);
carrito.girar('derecha');
carrito.frenar();
carrito.bajarVelocidad(40);
carrito.apagar();