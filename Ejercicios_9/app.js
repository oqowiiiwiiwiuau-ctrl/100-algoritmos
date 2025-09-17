const distancia = document.getElementById("distancia");
const tiempo = document.getElementById("tiempo");
const mybutton = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

mybutton.addEventListener("click", function(){
    //Atrapamos los valores
    let uno_distancia = distancia.value;
    let dos_tiempo = tiempo.value;
    //Convertir los valores a float
    let valor_distancia = parseFloat(uno_distancia);
    let valor_tiempo = parseFloat(dos_tiempo);
    //Realizar el calculo 
    let calculo = valor_distancia/valor_tiempo;
    //Mostrar los valores
    resultado.textContent = `La velocidad a la que te mueves es: ${calculo}
    metros/segundo, te falta velocidad para Alcanzar a tu Crush.`

});