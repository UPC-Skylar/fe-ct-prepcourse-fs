/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
  return array.shift();
}

function devolverUltimoElemento(array) {
  return array.pop();
}

function obtenerLargoDelArray(array) {
  return array.length;
}

function incrementarPorUno(array) {
  return array.map((element) => ++element);
  // El arreglo recibido por parámetro contiene números.
  // Retornar un arreglo con los elementos incrementados en +1.
  // Tu código:
}

function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento);
  return array;
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
}

function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento);
  return array;
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
}

function dePalabrasAFrase(palabras) {
  return palabras.join(" ");
  // El argumento "palabras" es un arreglo de strings.
  // Retornar un string donde todas las palabras estén concatenadas
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
}

function arrayContiene(array, elemento) {
  return array.includes(elemento);
  // Verifica si el elemento existe dentro del arreglo recibido.
  // Retornar true si está, o false si no está.
  // Tu código:
}

function agregarNumeros(arrayOfNums) {
  return arrayOfNums.reduce((a, b) => a + b);
  // El parámetro "arrayOfNums" debe ser un arreglo de números.
  // Suma todos los elementos y retorna el resultado.
  // Tu código:
}

function promedioResultadosTest(resultadosTest) {
  let sumaNotas = 0;
  resultadosTest.forEach((element) => (sumaNotas += element));
  return sumaNotas / resultadosTest.length;
  // El parámetro "resultadosTest" es un arreglo de números.
  // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
  // Tu código:
}

function numeroMasGrande(arrayOfNums) {
  return Math.max(...arrayOfNums);
  // El parámetro "arrayOfNums" es un arreglo de números.
  // Retornar el número más grande.
  // Tu código:
}

function multiplicarArgumentos() {
  if (arguments.length === 0) return 0;
  if (arguments.length === 1) return arguments[0];
  let multiplicacion = 1;
  arguments.forEach((element) => (multiplicacion *= element));
  return multiplicacion;
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
}

function cuentoElementos(array) {
  return array.filter((element) => element > 18).length;
  // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
  // Tu código:
}

function diaDeLaSemana(numeroDeDia) {
  if (numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana";
  return "Es dia laboral";
  // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
  // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
  // Tu código:
}

function empiezaConNueve(num) {
  return (num + "")[0] == 9;
  // Esta función recibe por parámetro un número.
  // Debe retornar true si el entero inicia con 9 y false en otro caso.
  // Tu código:
}

function todosIguales(array) {
  return array.every((element) => element === array[0]);

  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario retornar false.
  // Tu código:
}

function mesesDelAño(array) {
  if (
    !array.includes("Enero") ||
    !array.includes("Marzo") ||
    !array.includes("Noviembre")
  )
    return "No se encontraron los meses pedidos";
  return array.filter(
    (element) =>
      element === "Enero" || element === "Marzo" || element === "Noviembre"
  );
  // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
}

function tablaDelSeis() {
  let tabla_6 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let result = [];
  for (let number of tabla_6) {
    result.push(number * 6);
  }
  return result;
  // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Tu código:
}

function mayorACien(array) {
  return array.filter((element) => element > 100);
  // La función recibe un arreglo con enteros entre 0 y 200.
  // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
  // Tu código:
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
  let i = 1;
  let result = [];
  while (i <= 10) {
    num += 2;
    result.push(num);
    if (i === num) {
      result = "Se interrumpió la ejecución";
      break;
    }
    i++;
  }
  return result;
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retornarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // [PISTA]: utiliza el statement 'break'.
  // Tu código:
}

function continueStatement(num) {
  let i = 1;
  let result = [];
  while (i <= 10) {
    i++;
    if (i == 5) continue;
    num += 2;
    result.push(num);
  }
  return result;
  // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continua con la siguiente iteración.
  // [PISTA]: utiliza el statement 'continue'.
  // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  tablaDelSeis,
  mayorACien,
  breakStatement,
  continueStatement,
};
