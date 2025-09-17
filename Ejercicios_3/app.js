const valor_uno = document.getElementById("primero");
const mybutton = document.getElementById("button");
const print = document.getElementById("print");
const explicacion = document.getElementById("explicacion");

mybutton.addEventListener("click", function(){
    let uno = valor_uno.value;
    let uno_entero = parseFloat(uno);

    // Utilizamos Math.abs() para calcular el valor absoluto
    let valorAbsoluto = Math.abs(uno_entero);

    // Mostramos el resultado en el documento HTML
    print.textContent = `|${uno_entero}| = ${valorAbsoluto}`;

    // Explicamos el concepto de distancia
    if (uno_entero < 0) {
        explicacion.textContent = `El valor absoluto de ${uno_entero} es ${valorAbsoluto}, porque está a ${valorAbsoluto} espacios de distancia del cero en la recta numérica.`;
    } else if (uno_entero > 0) {
        explicacion.textContent = `El valor absoluto de ${uno_entero} es ${valorAbsoluto}, porque está a ${valorAbsoluto} espacios de distancia del cero en la recta numérica.`;
    } else {
        explicacion.textContent = `El valor absoluto de 0 es 0, ya que es el punto de referencia en la recta numérica.`;
    }
});