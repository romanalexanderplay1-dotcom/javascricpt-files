const numeros = [10, 20, 30, 40, 50];
console.table(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[20]);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
console.log(meses.length);
for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}
console.table(meses);

const materias = ['Matemáticas', 'Física', 'Química', 'Historia', 'Lengua', 'Inglés', 'Biología', 'Geografía', 'Educación Física', 'Arte'];

for (let i = 0; i < materias.length; i++) {
    console.log(materias[i]);
}