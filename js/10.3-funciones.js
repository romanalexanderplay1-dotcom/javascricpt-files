function sumar(a, b) {
    return a + b;
}
const resultado = sumar(5, 7);
console.log(`El resultado de la suma es: ${resultado}`);

let total = 0;
     function agregarCarrito(precio) {
         return total += precio;
     }
        function calcularImpuesto(total) {
            return total * 1.15;
        }
        total = agregarCarrito(200);
        total = agregarCarrito(300);
        total = agregarCarrito(400);
        console.log(total);

        const totalPagar = calcularImpuesto(total);
        console.log(`El total a pagar con impuestos es: ${totalPagar}`);

        let notas = 0;
        function agregarNotas(nota) {
            return notas += nota;
        }
            function promedioNotas(notas) {
                return notas / 3;
            }
            notas = agregarNotas(20);
            notas = agregarNotas(16);
            notas = agregarNotas(19);
            console.log(notas);
             
            const promedio = promedioNotas(notas);
            console.log(`El promedio de las notas es: ${promedio}`);
            