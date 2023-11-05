let str = "Hola, ¿Cómo estás hoy? Todo bien, estoy super. ES";
function buscarPalabras(texto, buscar) {
  let arrtext = texto.split(" ");
  let result = arrtext.filter((element) =>
    element.toLowerCase().includes(buscar.toLowerCase())
  );
  return result;
  // Tu código aquí
}

console.log(buscarPalabras(str, "es"));
