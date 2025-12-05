const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

console.table(meses);
meses[0] = 'Nuevo mes';

meses[5] = 'Junio';
console.table(meses);   
