for (let i = 0; i <= 10; i+=2) {
    console.log(i);
}

for (let i = 0; i <= 10; i++) {
    if (i % 3 == 0) {
        console.log(`numero ${i} es multiplo de 3`);
    } else {
        console.log(`numero ${i}  no es multiplo de 3`);
    }

    }


    for (let i = 0; i <= 10; i++) {
        if (i === 5) {
            console.log('estamos en el 5, FINALIZAMOS');
            break;
        }
        console.log(`numero ${i}`);
    }

    const carrito = [
        { nombre: 'Monitor 20 Pulgadas', precio: 500 },
        { nombre: 'Television 50 Pulgadas', precio: 700 },
        { nombre: 'Tablet', precio: 300 },
        { nombre: 'Audifonos', precio: 200, descuento: true, descuentoCantidad: '10%' },
        { nombre: 'Teclado', precio: 50 },
        { nombre: 'Celular', precio: 500, descuento: true, descuentoCantidad: '5%' },
    ];
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].descuento) {
            console.log(`El producto ${carrito[i].nombre} tiene un descuento de ${carrito[i].descuentoCantidad}`);
            continue;
        }
        console.log(carrito[i].nombre);
        }
    
        for (let i = 1; i <= 100; i++) {
            if (i % 5 === 0 && i % 3 === 0) {
                console.log(`${i} FIZZBUZZ`);
            } else if (i % 3 === 0) {
                console.log(`${i} fizz`);
            } else if (i % 5 === 0) {
                console.log(`${i} buzz`);
            } 
             
        }
        let i = 0;
        while (i <= 10) {
            console.log(`numero WHILE: ${i}`);
            i++;
        }

        let j = 1;
        while (j <= 100) {
            if (j % 2 === 0) {
                console.log(`numero WHILE PAR: ${j}`);
            } else {
                console.log(`numero WHILE IMPAR: ${j}`);
            }
            j++;
        }
        let k = 1;
        while (k <= 100) {
            if (k % 5 === 0 && k % 3 === 0) {
                console.log(`${k} FIZZBUZZ`);
            } else if (k % 3 === 0) {
                console.log(`${k} fizz`);
            } else if (k % 5 === 0) {
                console.log(`${k} buzz`);
            }
            k++;
        }