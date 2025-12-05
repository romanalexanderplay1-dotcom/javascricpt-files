const carrito = [];

const producto = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400
}
const producto2 = {
    nombre: 'Celular',
    precio: 800 
}

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}
carrito.unshift(producto3);

console.log(carrito);

const bolso = [];
const item1 = {
    objeto: 'libro de biologia',
    paginas: 300,
    año: 2019,
}
const item2 = {
    objeto: 'cuaderno',
    paginas: 100,
    año: 2001,

}
const item3 = {
    objeto: 'lapicera',
}
const item4 = {
    objeto: 'regla',
}
const item5 = {
    objeto: 'libro de matematicas',
    paginas: 150,
    año: 1999,
}
const cartuchera = [];
    

cartuchera.push(item3);
cartuchera.push(item4);
bolso.push(item1);
bolso.push(item5); 
bolso.unshift(cartuchera);

console.log(bolso);

item6 = {
    objeto: 'libro de historia',
    paginas: 200,
    año: 2025,
}
item7 = {
    objeto: 'libro de fisica',
    paginas: 250,
    año: 2023,
}
item8 = {
    objeto: 'libro de quimica',
    paginas: 350,
    año: 2022,
}
item9 = {
    objeto: 'libro de literatura',
    paginas: 400,   
    año: 2020,
}
item10 = {
    objeto: 'libro de ingles',
    paginas: 150,
    Año: 2021,
}

let bolso2 = [...bolso, item6, item7, item8, item9, item10];
console.log(bolso2);
