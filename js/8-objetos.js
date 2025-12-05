const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}
console.log(producto);

const cedula = {
    nombre: "Roman",
    apellido: "Lopez",
    edad: 28,
    pais: "Colombia",
    profesion: "Desarrollador Web",
    numero: 1234567890,
}
console.log(cedula);

const estudiante = {
    nombre: "Ana",
    apellido: "Gomez",
    edad: 22,
    cursos: "Matemáticas, Física, Programación",
    promedio: 9.5,
    graduado: "si",
}
console.log(estudiante);


if (estudiante.graduado === "si") {
    console.log(`${estudiante.nombre} está graduado.`);
} else {
    console.log(`${estudiante.nombre} no está graduado.`);
}