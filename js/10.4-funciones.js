const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo la canción: ${id}`);
    },
    pausar: function() {
        console.log('Pausando la canción');
    },
    borrar: function(id) {
        console.log(`Borrando la canción: ${id}`);
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la playlist: ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`);
    }
};
let velocidad=0;
const Carro = {
    avanzar: function(velocidad) {
        console.log(`El carro está avanzando a la velocidad de ${velocidad} km/h`);
    },
    frenar: function() {
        console.log('El carro se ha detenido');
    },
    girar: function(direccion) {
        if (direccion === 'izquierda' || direccion === 'derecha') {
        console.log(`El carro está girando a la ${direccion}`);
        } else {
        console.log('Dirección no válida. Usa "izquierda" o "derecha".');
       } 
    },
    reducirvelocidad: function(velocidad) {
        console.log(`Reduciendo la velocidad a ${velocidad} km/h`);
    },
    acelerar: function(velocidad) {
        console.log(`Acelerando a ${velocidad} km/h`);
    },  
};
avanzar=Carro.avanzar(60);
frenar=Carro.frenar();
girar=Carro.girar('izquierda');