const reproductor = {
    cancion: ' ',
    reproducir: id => console.log(`Reproduciendo cancion con el id: ${id}`),
    pausar: () => console.log('Pausando...'),
    borrar: id => console.log(`Borrando cancion... ${id}`),
    crearPlaylist: nombre => console.log(`Creando la playlist de: ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist de: ${nombre}`),
    set NuevaCancion (cancion)  {
        this.cancion = cancion;
        console.log(`Añadiendo la cancion: ${cancion}`);
    },
    get obtenerCancion () {
        console.log(`La cancion actual es: ${this.cancion}`);
    }
}
reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(20);
reproductor.crearPlaylist('Rock 90s');
reproductor.reproducirPlaylist('Rock 90s');
reproductor.NuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;

const carro = {
    placa: ' ',
    encender: (id) => console.log(`Encendiendo el carro con la placa: ${id}`),
    apagar: () => console.log('Apagando el carro...'),
    acelerar: (velocidad) => console.log(`Acelerando a: ${velocidad} km/h`),
    frenar: () => console.log('Frenando el carro...'),
    bajarVelocidad: (velocidad) => console.log(`Reduciendo la velocidad a: ${velocidad} km/h`),
    girar: (direccion) => {
        if (direccion === 'izquierda' || direccion === 'derecha') {
            console.log(`Girando a la ${direccion}`);
        } else {
            console.log('Dirección no válida. Usa "izquierda" o "derecha".');
        }
    },
}
carro.encender('ABC-123');
carro.acelerar(80);
carro.girar('derecha');
carro.frenar();
carro.bajarVelocidad(30);
carro.apagar();