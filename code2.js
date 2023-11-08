function tieneEmail(objetoUsuario) {
  return !objetoUsuario.hasOwnProperty("email") ? true : false;
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso retornar true. Caso contrario, false.
  // Tu código:
}

console.log(tieneEmail({ usernombre: "Jhon", email: null }));
console.log(null == false);
