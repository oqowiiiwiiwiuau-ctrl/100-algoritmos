const uno = document.getElementById("primero");
const mybutton = document.getElementById("button");
const print = document.getElementById("print");
const valor_incierto_en_metros = 0.001; 

mybutton.addEventListener("click", function(){
    //Atrapar los valores de los espacios de texto
    let valor_uno = uno.value;
    //Convertir el valor en tipo float
    let valor_float = parseFloat(valor_uno);
    //Mostra el grado de incertidumbre
    let resultado = valor_float/100;
    print.textContent = `El valor convertido a metros es: ${resultado.toFixed(2)} m ± ${valor_incierto_en_metros} m,
     Este es el grado de incertidumbre de una regla convencional.`;


});