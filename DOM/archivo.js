//document.write('Primer programa en javascritp<br>');
//Declaramos variables
// let distancia, tiempo, velocidad;
// distancia=prompt('Ingrese la distancia: ');
// tiempo=prompt('Ingrese el tiempo: ', '<br>');
// velocidad=distancia/tiempo;
// document.write('La velocidad del objeto es: ',velocidad);
//problema 10 calcular la siguiente expresión
//x+10y+2z
//declara las variables de la ecuación y la variable resulta
// let x,y,z,resultado;
// x=parseInt(prompt('Ingrese el valor de X: '));
// y=parseInt(prompt('Ingrese el valor de Y: '));
// z=parseInt(prompt('Ingrese el valor de Z: '));
// resultado=x+10*y+2*z;
// document.write('El valor de la ecuación es: ',resultado)
//Ingresar por teclado una edad de una persona y verificar
//si esta persona es mayor de edad
// let edad;
// edad=prompt('Ingrese su edad: ');
// if(edad>=18){//igualdades estrictas 
//     document.write('Eres mayor de edad...');
// }else{
//     document.write('No eres mayor y no puedes ingresar...');
// }
/*REalizar un algoritmo que verifique si un estudiantes
aprobó la materia de cálculo, la nota de aprobación es
mayour o igual a 51*/
// let nota;
// nota=prompt('Ingrese la nota: ');
// if(nota>=51){
//     document.write('Aprobaste ',nota);
// }else{
//     document.write('Reprobaste ',nota);
// }
/*Verifica si un número entero es positivo o negativo y 
si es cero mostra el correspondiente mensaje: */
// let valor;
// valor=prompt('Ingrese el valor; <br> ');
// if(valor==0){
//     document.write('El valor es 0.');
// }else if(valor>0){
//     document.write('El valor es positivo.');
// }else{
//     document.write('El valor es Negativo.');
// }
/**Según las operaciones 1,2,3,4 realizaran operaciones
 * de suma, resta, producto y división de dos números en cada opción
 */
//Declaración de variables
// Obtenemos el botón y el espacio donde se mostrará el resultado
const calcularBtn = document.getElementById('calcular');
const resultadoDiv = document.getElementById('resultado');

// Agregamos el evento para el botón "Calcular"
calcularBtn.addEventListener('click', function() {
    // Obtenemos los valores del formulario
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let operacion = parseInt(document.getElementById('operacion').value);
    let resultado;

    // Comprobamos que los valores sean números válidos
    if (isNaN(a) || isNaN(b)) {
        resultadoDiv.textContent = 'Por favor ingrese valores numéricos válidos.';
        return;
    }

    // Realizamos la operación según el valor seleccionado
    switch (operacion) {
        case 1: // Suma
            resultado = a + b;
            resultadoDiv.textContent = 'La suma es: ' + resultado;
            break;
        case 2: // Resta
            resultado = a - b;
            resultadoDiv.textContent = 'La resta es: ' + resultado;
            break;
        case 3: // Producto
            resultado = a * b;
            resultadoDiv.textContent = 'El producto es: ' + resultado;
            break;
        case 4: // División
            if (b === 0) {
                resultadoDiv.textContent = 'Error: No se puede dividir por cero.';
            } else {
                resultado = a / b;
                resultadoDiv.textContent = 'La división es: ' + resultado;
            }
            break;
        default:
            resultadoDiv.textContent = 'Opción no válida.';
    }
});
//Ejercicios 32
let genero_valor;
const determinarBotton = document.getElementById('femenino');
const Resultado2 = document.getElementById('Resultado2');

determinarBotton.addEventListener('click', function() {
    let valor = document.getElementById('genero').value;
    if(valor=='f'){
        Resultado2.textContent='femenino';
    }else if(valor=='m'){
        Resultado2.textContent='masculino';
    }else{
        Resultado2.textContent='Ingrese un genero conocido';
    }
});
//Ejercicio 33
const presionarBotton = document.getElementById('letras');
const visualizacion = document.getElementById('ver_resultado');

presionarBotton.addEventListener('click', function(){
    //Atrapamos los valores del campo de texto
    let valor = parseInt(document.getElementById('numero33').value);
    if(valor==0){
        visualizacion.textContent='Cero';
    }else if(valor==1){
        visualizacion.textContent='Uno';
    }else if(valor==2){
        visualizacion.textContent='Dos';
    }else if(valor==3){
        visualizacion.textContent='Tres';
    }else{
        visualizacion.textContent='Valor fuera del rango.';
    }
});
//Ejercicio 34
const botton_presionar=document.getElementById('boton');
const ver_valor_final=document.getElementById('Ver_resultado_34');
botton_presionar.addEventListener('click', function(){
    let valor = parseInt(document.getElementById('casilla_atrapar_numero').value);
    if(valor==1){
        ver_valor_final.textContent='Aprobo';
    }else if(valor==2){
        ver_valor_final.textContent='Reprobo';
    }else if(valor==3){
        ver_valor_final.textContent='abandono';
    }else{
        ver_valor_final.textContent='Valor fuera del rango.';
    }
});
//Ejercicio 35
const button_presiona35=document.getElementById('boton35');
const ver_valor_35=document.getElementById('ver_resultado35');
//Creamos la función que atrapa el texto y muestra el valor
button_presiona35.addEventListener('click',function(){
    let valor=document.getElementById('texto35').value;
    if(valor=='p'){
        ver_valor_35.textContent='Pesimo';
    }else if(valor=='m'){
        ver_valor_35.textContent='Malo';
    }else if(valor=='r'){
        ver_valor_35.textContent='Regular';
    }else if(valor=='b'){
        ver_valor_35.textContent='Bueno';
    }else if(valor=='e'){
        ver_valor_35.textContent='Excelente';
    }else{
        ver_valor_35.textContent='Ingrese valor correcto';
    }
});
//Ejercicio 36
const button_36 = document.getElementById('buton36');
const ver_valor_36 = document.getElementById('ver_resultado36');
//Creamos la función
button_36.addEventListener('click', function(){
    let valor=parseInt(document.getElementById('texto36').value);
    switch(valor){
        case 1:
            ver_valor_36.textContent='I';
            break;
        case 2:
            ver_valor_36.textContent='II';
            break;
        case 3:
            ver_valor_36.textContent='III';
            break;
        case 4:
            ver_valor_36.textContent='IV';
            break;
        case 5:
            ver_valor_36.textContent='V';
            break;
        default:
            ver_valor_36.textContent='Ingrese un valor natural menor.'
    }
});
//Ejercicio 37-----------------------------
const boton_37=document.getElementById('buton37');
const ver_resultado37=document.getElementById('ver_resultado37');
//la función para apretar el botón
boton_37.addEventListener('click', function(){
    let valor=parseInt(document.getElementById('texto37').value);
    switch(valor){
        case 1:
            ver_resultado37.textContent='Matemáticas';
            break;
        case 2:
            ver_resultado37.textContent='Fisica';
            break;
        case 3:
            ver_resultado37.textContent='Quimica';
            break;
        case 4:
            ver_resultado37.textContent='Otros';
            break;
        default:
            ver_resultado37.textContent='valor invalido.';
    }
})
//Ejercicio 41-------------------------------------
const boton41=document.getElementById('serie');
const ver_41=document.getElementById('ver_texto41');
//la función para el botton addlistener
boton41.addEventListener('click', function(){
    let valor=parseInt(document.getElementById('texto41').value);
    let contador=0;
    let lista='';
    while(contador<=valor){
        if(contador%2!=0){
            lista+='['+contador+']';
        }
        contador+=1;
    }
    ver_41.textContent=lista;
})
//Ejercicio 51------------------------------------------
/**Mostra en patanlla los números naturales hasta N */
const boton51=document.getElementById('serie51');
const texto_valor_51=document.getElementById('ver_texto51');
//la función que me permite addeventlistener acción
boton51.addEventListener('click',function(){
    let valor=parseInt(document.getElementById('texto51').value);
    let contador=0;
    let lista='';
    do{
        lista+=contador+' - ';
        contador+=1;

    }while(contador<=valor);
    texto_valor_51.textContent=lista;
});

const buton98=document.getElementById('buton98');
const ver_98=document.getElementById('mostrar98');
let lista98=[1,2,3,4,5];
ver_98.textContent=lista98;
//Creamos la función de presionar el botón 
buton98.addEventListener('click', function(){
    let valor=document.getElementById('agregar_dato').value;
    valor = parseInt(valor);
    lista98.push(valor);
    ver_98.textContent=lista98;
});























