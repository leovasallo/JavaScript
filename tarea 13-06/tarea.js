/*
1-Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
2-Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
3-Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
4-Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
    0-2: Muy deficiente
    3-4: Insuficiente
    5-6: Suficiente
    7: Bien
    8-9: Notable
    10: Sobresaliente
Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
5-Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
6-El verdulero de la esquina necesita una aplicación donde según la fruta que ingrese le diga el precio por kilo
7-Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).
El algoritmo para calcular la letra del dni es el siguiente :
El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
Ejemplo:
Input:  40773821
Output: ‘L’
*/

//punto 1
let primerNumero = parseFloat(prompt("Ingrese el  1er número:"))
let segundoNumero = parseFloat(prompt("Ingrese el segundo número:"))

if (primerNumero > segundoNumero)
    document.write(`El mayor es ${primerNumero}`)
else
    document.write(`El mayor es ${segundoNumero}`)

//punto 2
let number = Number(prompt("Ingrese el número"));


switch (true) {
case numero % 2 == 0: 
    document.write(`${numero} es divisible por 2`);
break;
case numero % 3 == 0:
    document.write(`${numero} es divisible por 3`);
    break;


case numero % 5 == 0:
    document.write(`${numero} es divisible por 5`);
break;
case numero % 7 == 0:
    document.write(`${numero} es divisible por 7`);
break;

default:
    document.write(`${numero} no es divisible por 2,3, 5 ni 7`);
    
break;
}

//punto 3
let edad = Number(prompt("Indique su edad:"));
if (edad >= 18)
    document.write("Puedes sacar tu licencia")
else
    document.write("Aun no puedes manejar")

//punto 4
let nota = parseInt(prompt("Ingrese la nota de 0 a 10:"))

if  (nota >= "0" && nota <= 10){ 
    

if (nota <= 2){
    alert("Muy deficiente")
}else if(nota <= 4){
    alert("Insuficiente")
}else if(nota <= 6){
    alert("suficiente")
}else if(nota == 7){
    alert("Bien")
}else if(nota <= 9){
    alert("Notable")
}else if(nota == 10){
    alert("sobresaliente")
}
}else{
document.write("Debe ingresar un número entre 0 y 10");
}

//punto 5
let numero = "";
let suma = "";

do {
    
    numero = parseInt(prompt("Ingrese un numero para sumar"));
    if (!isNaN(numero))
    if (numero){
        suma += numero 
    }else{
    document.write("debe ingresar un numero")
}
    }while (numero);



document.write(suma);

//punto 6
let fruta = prompt("Ingrese el nombre de la fruta: ")

if (fruta === "" || fruta === null) {
    console.error("Debe ingresar un nombre de fruta válida");
} else {
    switch (fruta.toLowerCase()) {
    case "manzana":
        
        document.write(`El precio de ${fruta} es $1000`);
        break;
    case "banana":
        document.write(`El precio de ${fruta} es $1200`);
        break;
    case "pera":
        document.write(`El precio de ${fruta} es $1800`);
        break;
    case "mandarina":
        document.write(`El precio de ${fruta} es $9000`);
        break;

    default:
        alert("No tenemos la fruta que solicitó");
        break;
    }
}

//punto 7
const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

        while (true) {
            let numero = prompt("Introduce un número de DNI (entre 0 y 99999999) o pulsa Cancelar para terminar:");

            
            if (numero === null) {
                break;
            }

            // Convierte la entrada en un número
            let numeroDNI = parseInt(numero);

            // Verifica si la entrada es un número válido
            if (isNaN(numeroDNI) || numeroDNI < 0 || numeroDNI > 99999999) {
                alert("Eso no es un número válido de DNI. Por favor, introduce un número entre 0 y 99999999.");
            } else {
                // Calcula la letra del DNI
                let resto = numeroDNI % 23;
                let letra = letrasDNI[resto];
                

                alert("INPUT:  " + numeroDNI + " OUTPUT: " + "'" + letra + "'");
            }
            
        }
