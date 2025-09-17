const uno = document.getElementById("primero");
const dos = document.getElementById("segundo");
const mybutton = document.getElementById("button");
const print1 = document.getElementById("print");
const print2 = document.getElementById("print2");

mybutton.addEventListener("click", function(){
    //obtenemos los valores 
    let valor_uno = uno.value;
    let valor_dos = dos.value;
    //convertimos a valor númerico para realizar operaciones
    let valor_1 = parseFloat(valor_uno);
    let valor_2 = parseFloat(valor_dos);
    //Realizamos el calculo del área
    let area = valor_1*valor_2;
    console.log(typeof(area));
    print1.textContent =`El Área del rectangulo es: ${area}`;

});