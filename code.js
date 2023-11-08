function agregarMetodoCalculoDescuento(objetoProducto) {
  objetoProducto.calcularPrecioDescuento = function () {
    let descuento =
      objetoProducto.precio * objetoProducto.porcentajeDeDescuento;
    return objetoProducto.precio - descuento;
  };
}
const storeItem = {
  precio: 80,
  porcentajeDeDescuento: 0.1,
};

const storeItem2 = {
  precio: 5,
  porcentajeDeDescuento: 0.5,
};

agregarMetodoCalculoDescuento(storeItem2);
console.log(storeItem2.calcularPrecioDescuento());
