/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  let result = [];
  let k = 0;
  let objeto_keys = Object.keys(objeto);
  for (let i = 0; i < objeto_keys.length; i++) {
    result.push([]);
  }
  for (let key in objeto) {
    result[k].push(key);
    result[k].push(objeto[key]);
    k++;
  }
  return result;
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
}

function numberOfCharacters(string) {
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    let letra = string[i];
    if (obj[letra]) {
      obj[letra]++;
    } else {
      obj[letra] = 1;
    }
  }

  let objOrdenado = Object.keys(obj).sort();

  let result = {};
  for (let element of objOrdenado) {
    result[element] = obj[element];
  }

  return result;
}

function capToFront(string) {
  let stringArr = string.split("");
  let arrMayus = stringArr.filter(
    (element) => element == element.toUpperCase()
  );
  let arrMinus = stringArr.filter(
    (element) => element == element.toLowerCase()
  );
  let result = arrMayus.concat(arrMinus);
  return result.join("");
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
}

function asAmirror(frase) {
  let fraseArr = frase.split(" ");
  let rev = fraseArr.map((element) => element.split("").reverse().join(""));
  return rev.join(" ");
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
}

function capicua(numero) {
  return (numero + "").split("").reverse().join("") == numero
    ? "Es capicua"
    : "No es capicua";
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
}

function deleteAbc(string) {
  let stringArr = string.split("");
  let stringArr_filtrado = stringArr.filter(
    (element) => element !== "a" && element !== "b" && element !== "c"
  );
  return stringArr_filtrado.join("");
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
}

function sortArray(arrayOfStrings) {
  let aux;
  for (let i = 0; i < arrayOfStrings.length - 1; i++) {
    for (let k = i + 1; k < arrayOfStrings.length; k++) {
      if (arrayOfStrings[i].length > arrayOfStrings[k].length) {
        aux = arrayOfStrings[k];
        arrayOfStrings[k] = arrayOfStrings[i];
        arrayOfStrings[i] = aux;
      }
    }
  }
  return arrayOfStrings;
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["looking", "You", "are", "beautiful" ]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
}

function buscoInterseccion(array1, array2) {
  let result = [];
  array1.forEach((element) => {
    for (let i = 0; i < array2.length; i++) {
      if (element === array2[i]) result.push(element);
    }
  });
  return result;
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
