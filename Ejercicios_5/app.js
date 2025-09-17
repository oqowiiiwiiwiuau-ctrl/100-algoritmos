const uno = document.getElementById("primero");
const dos = document.getElementById("segundo");
const mybutton = document.getElementById("button");
const print = document.getElementById("print");
const print2 = document.getElementById("print2");

//ejecución cuando presionamos el botón 
mybutton.addEventListener("click", function(){
    let valor1 = uno.value;
    let valor2 = dos.value;
    //convertimos a valores enteros por que javascript no es fuertemente tipado
    //supongo que esto es una ironia !!!
    let uno_entero = parseInt(valor1);
    let dos_entero = parseInt(valor2);
    //realizamos el cambio de variable
    let tres_entero = uno_entero;
    uno_entero = dos_entero;
    //mostramos el cambio de valores
    print.textContent = `el valor de A es: ${uno_entero}`;
    print2.textContent = `El valor de B es: ${tres_entero}`; 

});