function sumar() {
    console.log(10 + 10);
}
sumar();
 
const sumar2 = function() {
    console.log(3 + 3);
}
sumar2();

let x = 0;
const sumar3 = function(n1, n2) {
    console.log(n1 + n2);
    x = n1 + n2;
}


sumar3(1, 2);

let y = 0;
const sumar4 = function(n1, n2) {
    console.log(n1 - n2);
    y = n1 - n2; // Esta línea nunca se ejecuta
}

sumar4(99, 20);

let i=0;
const sumar5 = function() {
   console.log(x ** y);
    i = x ** y;
}
sumar5();

sumar6();
function sumar6() {
    console.log('Este es el resultado de la función sumar6: ' + (3 * 2));
}
alert('hubo un error en la consola');
prompt('por favor ingrese su nombre');
parseInt('20');