//** MANERAS DE CREAR EXPRESIÓN REGULAR */

var expresion1=new RegExp("abc");

var parrafo=/abc/;

// con salto de linea

var expresion2=/texto1 \/n texto2/;


//** EVALÚAR SI ENCUENTRA UNA EXPRESIÓN REGULAR */

var expresion3=new RegExp("cba");
console.log("El resultado de la evaluación es:", expresion3.test("La ciudad de cba es magnifica"));
var expresion4=/Hola Mundo/;
console.log("El resultado de la evaluación es:", expresion4.test("Evaluacion de la cadena Hola Mundo"));

//** Evaluación de cadenas que estén dentro del rango */
var expresion5=/[123456789]/;
console.log("El resultado de la evaluación es:", expresion5.test("El nació en 1891"));

var expresion6=/[0-9a-zA-Z]/;
console.log("El resultado de la evaluación es:", expresion5.test("El nació en 1891"));

//** ATAJOS DE CARACTERES */

//EVALUAR FECHA 29 06 2007
// \d busca cualquier número
var expresion7=/\d\d-\d\d-\d\d\d\d/;
console.log("evaluación expresion7:",expresion7.test("26-05-2001"));

var expresion8=/[\d]/; // al menos algunos de sus caracteres sea un número
console.log("expresion8:",expresion8.test("12-junio-2052"));

var expresion9=/[^01]/; // no sea un número binario
console.log("expresion9:",expresion9.test("0101221010101011000"));

// + patrón puede repetirse una o más veces
// * patrón puede repetirse una o más veces y acepta que no esté presente

var expresion10=/\d+/; // no sea un número binario
console.log("expresion10:",expresion10.test("1997"));
console.log("expresion10:",expresion10.test(""));
var expresion11=/\d*/;
console.log("expresion11:",expresion11.test("1997"));
console.log("expresion11:",expresion11.test(""));

//patrón opcional ? significa que puede que esté o no esté el caracter
var exp=/Hola Mun?do/;
console.log("exp:",exp.test("Hola Mundo"));

console.log("exp:",exp.test("Hola Mudo"));

//** contabilizar caracteres {} */
var conteo=/\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log("conteo:",conteo.test("25-12-2012 11:45"));

//** EVALUAR CADENAS SIN IMPORTAR SI ES MAYÚSCULAS O MINÚSCULAS */

var exp3=/Hola Mundo/i;
console.log("exp3: ", exp3.test("HOLA MUNDO"));


//** AGRUPACIÓN PATRONES EN SUBESXPRESIONES */

var exp4=/Woo+(hoo+)+/i;
console.log("exp4: ", exp4.test("wooooooooohooohoohoohoohooooo"));


//** COINCIDENCIAS Y GRUPOS MEDIANTE EXEC Y MATCH */

var parrafo1=/\d+/.exec("Del año 1751");
console.log("parrafo1: ",parrafo1);
console.log("Hasta el año 2020".match(/\d+/)); //Es más usado, muestra a partir del indice que lo que encontré

//FORZAR A QUE SE CUMPLA UN PATRÓN

var archivo=/\bcat\b/;
console.log("archivo: ",archivo.test("cat"));

// MUESTRA OPCIÓN DE ELECCIÓN ENTRE OPCIONES
var oracion=/pollo|res|pescado/; // si no está en la lista devuelve false
console.log(oracion);

console.log(oracion.test("El cliente pidió res"));

//PATRÓN INICIO Y FIN
// ^ INICIO
//$ FIN
var expresionInicio=/^Any/;
var expresionFinal=/javascript$/;
var expresionInicioFinal=/^Any|javascript$/;

console.log("Inicio:",expresionInicio.test("Any app thet can be imagined can be made in javascript"));
console.log("Final:",expresionFinal.test("Any app thet can be imagined can be made in javascript"));
console.log("InicioFinal:",expresionInicioFinal.test("Any app thet can be imagined can be made in javascript"));


//Reemplazar patrones

var mensaje="El cliente pidió sushi y comió sushi";
console.log(mensaje.replace(/sushi/g, "tacos")); // la g busca en toda la oración y reemplaza

//BUSQUEDA DE CADENA DE TEXTO

// \W  CUALQUIER  CARACTER QUE NO SE ALFANUMÉRICO
// \S CUALQUIER CARACTER QUE NO SEA UN ESPACIO EN BLANCO

var mensaje1="Esta historia continuará ...";

console.log("MENSAJE1:",mensaje1.search(/\W/));
console.log("MENSAJE1",mensaje1.search(/\S/));

//PATRÓN LASTINDEX, ES COMO UN CONTADOR SE USA CON EXEC, se usa con g a nivel global

var mensje2=/\d/g;

console.log(mensje2.exec("Pedí 4 tacos y 1 agua")); //MUESTRA LOS INDICES EN DONDE ENCUENTRA EL PATRÓN
console.log(mensje2.lastIndex); //SE POSICIONA EN EL SIGUIENTE INDICE A EVALUAR

//loop ciclo while

var oracion="Llegaban por montones, primero 10, despues 20, despues 30, y se duplicaban hasta llegar a 30";
var patron=/\b(\d+)\b/g;

var match; //Es donde se guarda el patron

while(match=patron.exec(oracion)){
    console.log(match);       //en donde va tener ese valor posición 1
    console.log("Se encontró:",match[1], "en la posición:", match.index);

    
}