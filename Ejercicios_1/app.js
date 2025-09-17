let primero = document.getElementById("primerElemento");
let segundo = document.getElementById("segundoElemento");
let myButton = document.getElementById("button");
let imprimir = document.getElementById("print");
let explicacion = document.getElementById("explicacion");

// Los valores para el límite de un entero de 32 bits con signo.
// 2^31 - 1 es el valor máximo positivo.
const MAX_32_BIT_SIGNED = 2147483647;
// -2^31 es el valor mínimo negativo.
const MIN_32_BIT_SIGNED = -2147483648;

myButton.addEventListener("click", function(){
    let valor1 = parseInt(primero.value);
    let valor2 = parseInt(segundo.value);

    // Sumamos los números
    let sumatoria = valor1 + valor2;

    // Aquí está la parte clave: forzar la suma a un entero de 32 bits
    // En JavaScript, el operador OR a nivel de bits ( | ) fuerza el valor a un entero de 32 bits
    // El operador de desplazamiento a la derecha con signo (>>) seguido de un desplazamiento a la izquierda (<<)
    // es una técnica común para simular el comportamiento de desbordamiento de 32 bits.
    let sumatoria32Bit = (valor1 + valor2) | 0;

    imprimir.textContent = `Resultado normal: ${sumatoria}`;

    // Ahora, explicamos por qué 2^32 es importante y qué sucede
    let explicacionTexto = "";

    // Comprobamos si el resultado normal excede los límites
    if (sumatoria > MAX_32_BIT_SIGNED || sumatoria < MIN_32_BIT_SIGNED) {
        imprimir.textContent += ` | Resultado limitado a 32 bits: ${sumatoria32Bit}`;
        explicacionTexto = `
            El resultado de la suma (${sumatoria}) superó el límite de un entero de 32 bits (${MAX_32_BIT_SIGNED}).
            En muchos lenguajes como C++ o Java, esto causaría un **desbordamiento (overflow)**,
            haciendo que el valor "dé la vuelta" y se convierta en un número inesperado.
            El límite de 32 bits ($2^{32}$) define la cantidad de combinaciones
            posibles para almacenar números, lo cual es fundamental en la programación de bajo nivel y
            la gestión de memoria. JavaScript no tiene este límite por defecto, pero con operaciones de bits podemos
            simular este comportamiento, como se ve en el resultado de 32 bits.
        `;
    } else {
        imprimir.textContent = `Resultado: ${sumatoria}`;
        explicacionTexto = `
            El resultado de la suma (${sumatoria}) no superó el límite de un entero de 32 bits.
            En este caso, el comportamiento del programa es el esperado, ya que el valor está dentro
            del rango que la mayoría de los tipos de datos pueden manejar de forma segura.
        `;
    }

    explicacion.innerHTML = explicacionTexto.trim();
});