//ahora vamos a ver como integrar todo esto para subirlo a vercel jajaja
const uno = document.getElementById("primero");
const dos = document.getElementById("segundo");
const mybutton = document.getElementById("button");
const print = document.getElementById("print");
const print2 = document.getElementById("print2");

//la función addlistener
mybutton.addEventListener("click", function(){
    //Atrapamos los dos valores 
    let valor1 = uno.value;
    let valor2 = dos.value;
    //convertimos a enteros o flotantes
    let uno_entero = parseFloat(valor1);
    let dos_entero = parseFloat(valor2);
    //realizar las operaciones
    let cociente = parseInt(uno_entero/dos_entero);
    let residuo = uno_entero%dos_entero;
    //mostrar los resultados 
    print.textContent = `El cociente es: ${cociente}`;
    print2.textContent = `El residuo es: ${residuo}`;
});