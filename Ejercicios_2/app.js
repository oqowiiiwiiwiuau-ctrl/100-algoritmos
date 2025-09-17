const valor_uno = document.getElementById("primero");
const mybutton = document.getElementById("button");
const print = document.getElementById("print");
const explicacion = document.getElementById("explicacion");

mybutton.addEventListener("click", function(){
    let uno = valor_uno.value;
    let uno_entero = parseFloat(uno);
    let resultado;

    // Condición para verificar si el número es negativo
    if (uno_entero >= 0) {
        // Si el número es positivo o cero, se calcula la raíz cuadrada normal
        resultado = Math.sqrt(uno_entero);
        print.textContent = `La raíz cuadrada de ${uno_entero} es: ${resultado}`;
        explicacion.textContent = `Este es un número real, ya que es el resultado de la raíz cuadrada de un número positivo.`;

    } else {
        // Si el número es negativo, se convierte a un número imaginario
        let parteReal = Math.sqrt(Math.abs(uno_entero));
        resultado = `${parteReal.toFixed(2)}i`; // toFixed(2) para redondear a 2 decimales
        print.textContent = `La raíz cuadrada de ${uno_entero} es: ${resultado}`;
        explicacion.textContent = `
            Esto es un número imaginario. Se escribe con la letra 'i', que representa la raíz cuadrada de -1.
            Por ejemplo, la raíz cuadrada de -9 es $3i$, porque se puede escribir como $\sqrt{9} \times \sqrt{-1}$.
        `;
    }

});