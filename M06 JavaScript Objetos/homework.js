/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
  let obj = {
    nombre: nombre,
    edad: edad,
    meow: () => "Meow!",
  };

  return obj;
  // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
  // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
  // Además, agregar una propiedad con el nombre "meow".
  // La propiedad "meow" será una función que retorne el string: "Meow!".
  // Retornar el objeto.
  // Tu código:
}

function nuevoUsuario(nombre, email, password) {
  let obj = {
    nombre: nombre,
    email: email,
    password: password,
  };
  return obj;
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retornar el objeto.
  // Tu código:
}

function agregarPropiedad(objeto, propiedad) {
  objeto[propiedad] = null;
  return objeto;
  // Recibirás un objeto por parámetro.
  // Debes agregarle una propiedad con el nombre recibido por parámetro.
  // Esta propiedad será igual al valor `null`.
  // Retornar el objeto.
  // Tu código:
}

function invocarMetodo(objeto, metodo) {
  objeto[metodo]();
  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
  // [NOTA]: no necesitar retornar nada.
  // Tu código:
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  return objetoMisterioso.numeroMisterioso * 5;
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:
}

function eliminarPropiedad(objeto, propiedad) {
  delete objeto[propiedad];
  return objeto;
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:
}

function tieneEmail(objetoUsuario) {
  return objetoUsuario.hasOwnProperty("email");
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso retornar true. Caso contrario, false.
  // Tu código:
}

function tienePropiedad(objeto, propiedad) {
  return objeto.hasOwnProperty(propiedad) ? true : false;
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso retornar true. Caso contrario, false.
  // Tu código:
}

function verificarPassword(objetoUsuario, password) {
  return objetoUsuario.password == password ? true : false;
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso retornar true. Caso contrario, false.
  // Tu código:
}

function actualizarPassword(objetoUsuario, nuevaPassword) {
  objetoUsuario.password = nuevaPassword;
  return objetoUsuario;
  // Reemplaza la contrseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  // Tu código:
}

function agregarAmigo(objetoUsuario, nuevoAmigo) {
  objetoUsuario.amigos.push(nuevoAmigo);
  return objetoUsuario;
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:
}

function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  objetoMuchosUsuarios.forEach((element) => (element.esPremium = true));
  return objetoMuchosUsuarios;
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
}

function sumarLikesDeUsuario(objetoUsuario) {
  return objetoUsuario.posts.reduce(
    (acumulador, resultado) => acumulador + resultado.likes,
    0
  );
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
}

function agregarMetodoCalculoDescuento(objetoProducto) {
  objetoProducto.calcularPrecioDescuento = function () {
    let descuento =
      objetoProducto.precio * objetoProducto.porcentajeDeDescuento;
    return objetoProducto.precio - descuento;
  };

  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  crearGato,
  nuevoUsuario,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento,
};
