iniciarapp();

function iniciarapp() {
    console.log('Iniciando app...');
    segundaFuncion();
}
function segundaFuncion() {
    console.log('Desde la segunda función');
    usuarioAutenticado();
}
function usuarioAutenticado(usuario = 'no hay usuario') {
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario autenticado correctamente: ${usuario}`);
}

