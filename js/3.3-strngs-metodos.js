const producto = 'Monitor 20 pulgadas ';
const texto = 'en promocion';
console.log(producto.repeat(3));
console.log(producto.repeat(2.2));
console.log(producto.concat(texto));

// split

const actividad = 'estoy aprendiendo javascript moderno';
console.log(actividad);
console.log(actividad.split(" "));

const hobbies = 'leer, caminar, escuchar musica, aprender a programar';
console.log(hobbies.split(", "));

//.toUpperCase()

const producto2 = 'Monitor 20 pulgadas';
console.log(producto2.toUpperCase());

//.toLowerCase()

console.log(producto2.toLowerCase());

// .to string()

const numero =200;
console.log(numero);
const numero2 = 300;
console.log(numero + numero2);
console.log(numero.toString());
console.log(numero2.toString());
console.log(`${numero} + ${numero2} = ${numero + numero2}`);

const incognita = 'x';
const valor1 = 20;
const valor2 = 2;
const valor3 = 5;

// Replace

const producto3 = 'Monitor 20 pulgadas';
console.log(producto3.replace('pulgadas"20,"24'));
console.log(producto3.replace('Monitor','Monitor Curvo'));

// .slice()

console.log(producto3.slice(0,10));
console.log(producto3.slice(8));
console.log(producto3.slice(2, 10));
console.log(producto3.slice(2,1));  

//substring()

console.log(producto3.substring(0,10));
console.log(producto3.substring(2,1));

const nombre = 'Juan';
console.log(nombre.substring(0,1));
console.log(nombre.charAt(0));

const minombre = 'Roman';
console.log(minombre.charAt(3));

