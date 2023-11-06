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

agregarMetodoCalculoDescuento(storeItem);
console.log(storeItem.calcularPrecioDescuento());
