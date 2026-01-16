const cursoMetodo = 'presencial';
const cursoDuracion = '6 meses';
const curso = 'diseño web';
switch (cursoMetodo) {
    case 'presencial':
        console.log(`El curso de ${curso} es presencial por ${cursoDuracion}`);
        break;
    case 'online':
        console.log(`El curso de ${curso} es online por ${cursoDuracion}`);
        break;
    case 'mixta':
        console.log(`El curso de ${curso} es mixto por ${cursoDuracion}`);
        break;
    default:
        console.log('El curso no es presencial ni online');
}    

const sedeCaracas = 200;
const sedeMaracaibo = 150;
const sedeBarcelona = 100;
const BarCa = sedeBarcelona + sedeCaracas;
const CaMa = sedeCaracas + sedeMaracaibo;
const MaBa = sedeMaracaibo + sedeBarcelona;
const totalCupos = sedeCaracas + sedeMaracaibo + sedeBarcelona;
const demanda = 250;

if (sedeCaracas >= demanda || sedeMaracaibo >= demanda || sedeBarcelona >= demanda) {
    console.log('Hay cupo disponible en alguna sede');
} else if (BarCa >= demanda) {
    console.log('Hay cupo disponible entre las sedes de Barcelona y Caracas');
} else if (CaMa >= demanda) {
    console.log('Hay cupo disponible entre las sedes de Caracas y Maracaibo');
} else if (MaBa >= demanda) {
    console.log('Hay cupo disponible entre las sedes de Maracaibo y Barcelona');
} else if (totalCupos >= demanda) {
    console.log('Hay cupo disponible entre todas las sedes');
} else {
    console.log('No hay cupo disponible');
}