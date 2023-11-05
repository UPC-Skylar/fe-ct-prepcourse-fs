function partir(arreglo, cantidad) {
  let cantNuevosArray = Math.ceil(arreglo.length / cantidad); //3
  let result = [];
  for (let i = 0; i < cantNuevosArray; i++) {
    result.push([]);
  }
  return result;
}

console.log(partir([1, 2, 3, 4, 5], 2));
