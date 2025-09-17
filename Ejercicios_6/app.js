const uno = document.getElementById("primero");
const dos = document.getElementById("segundo");
const mybutton = document.getElementById("button");
const print = document.getElementById("print");
const print2 = document.getElementById("print2");
const print3 = document.getElementById("print3");

mybutton.addEventListener("click", function(){
    //atrapar los valores 
    let valor1 = uno.value;
    let valor2  = dos.value;
    //Convertir los valores a enteros
    let uno_entero = parseInt(valor1);
    let dos_entero = parseInt(valor2);
    //Realizar las operaciones
    let sumatoria = uno_entero+ dos_entero;
    let resta = uno_entero-dos_entero;
    let producto = uno_entero* dos_entero;
    //Mostrar los valores 
    print.textContent = `La sumatoria es: ${sumatoria}`;
    print2.textContent = `La Resta es: ${resta}`;
    print3.textContent = `El producto es: ${producto}`;

});