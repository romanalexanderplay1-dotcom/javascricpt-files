const autenticado = true;
const puedePagar = false;

console.log(autenticado ? 'Usuario autenticado' : 'Usuario no autenticado');
console.log(puedePagar ? 'El usuario puede pagar' : 'El usuario no puede pagar');

console.log(autenticado && puedePagar ? 'El usuario está autenticado y puede pagar' : 'El usuario no está autenticado o no puede pagar');

console.log(autenticado ? puedePagar ? 'El usuario está autenticado y puede pagar' : 'El usuario está autenticado pero no puede pagar' : 'El usuario no está autenticado');

const saldo = 500;
const pagar = 600;

console.log(saldo >= pagar ? `Pago realizado, tu saldo era de ${saldo} y tu pago es de ${pagar}` : `Saldo insuficiente, tu saldo es de ${saldo} y tu pago es de ${pagar}`);