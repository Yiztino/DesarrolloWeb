// Instrucción Uno
let productos = [
  { nombre: "Camiseta", precio: 15, stock: 10 },
  { nombre: "Pantalones", precio: 25, stock: 8 },
  { nombre: "Zapatos", precio: 50, stock: 5 },
  { nombre: "Sombrero", precio: 10, stock: 20 },
];
  
  // Instrucción Dos
let carrito = [];
  
function agregarAlCarrito(productoNombre, cantidad) {
  for (let producto of productos) {
    if (producto.nombre === productoNombre) {
      if (producto.stock >= cantidad) {
        for(let articulo of carrito){
          if(articulo.nombre === producto.nombre){
            articulo.cantidad += cantidad;
            producto.stock -= cantidad;
            console.info(`${cantidad} ${productoNombre}(s) más agregado(s) al carrito`);
            return;
          }
        }
        
        carrito.push({
          nombre: productoNombre,
          cantidad: cantidad,
          precio: producto.precio,
        });

        producto.stock -= cantidad;
        console.info(`${cantidad} ${productoNombre}(s) agregado(s) al carrito`);
      } else {
        console.error(`No hay suficiente stock de ${productoNombre}`);
      }
      return;
    }
  }
  console.error(`El producto "${productoNombre}" no existe.`);
}
// Instrucción 3
function calcularTotal(){
  let total = 0;
  for (let item of carrito){
      total += item.precio * item.cantidad
  }
  return total;
}
//Instruccion 4
function aplicarDescuento(total){
  if(total > 100){
      return total * 0.9;
  }
  return total;
}

//Reto 1
function quitarDelCarrito(productoNombre, cantidad){
  let i=-1;
  for (let producto of carrito) {
    i++;
    if (producto.nombre === productoNombre) {
      if (producto.cantidad > cantidad) {
        producto.cantidad -= cantidad;
        actualizarStockProductos(producto.nombre, cantidad);
        console.info(`${cantidad} ${productoNombre}(s) removido(s) del carrito`);
      } else if(producto.cantidad === cantidad)
      {
        carrito.splice(i,1);
        
        actualizarStockProductos(producto.nombre, cantidad);
        console.info(` ${productoNombre} ha sido removido del carrito`);
      } else
      {
        console.error(`No hay suficiente de ${productoNombre} en el carrito`);
      }
      return;
    }else{ console.error(`El producto "${productoNombre}" no se encuentra en tu carrito.`);}
   
  }
  
}
function actualizarStockProductos(productoNombre, cantidad){
  for (let producto of productos) {
    if (producto.nombre === productoNombre) {
        producto.stock += cantidad; 
        console.info(`Se devolvieron: ${cantidad} ${productoNombre}(s) al stock de la tienda`);
        return;
    }
    //console.error(`El producto "${productoNombre}" no se encuentra en el stock de la tienda.`);
  }
}
//Reto 2
function cuentaRegresiva(segundosParaConfirmar){
  let tiempoRestante = segundosParaConfirmar; 
  console.log("Tiempo restante para confirmar tu compra: ")
  let intervalo = setInterval(function(){
    if(tiempoRestante != 0){
      console.log(tiempoRestante)
      tiempoRestante--;
    } else if(tiempoRestante == 0 ){
      console.log("¡Compra confirmada!");
      clearInterval(intervalo);
    } else { console.error("Error en la confirmación de compra")}
  }, 1000)
}
//Instruccion 5
function procesarCompra(){
  console.log("Procesando compra...");
  cuentaRegresiva(3);
  setTimeout(function(){
      let totalCarrito = calcularTotal();
      totalCarrito = aplicarDescuento(totalCarrito);
      console.log("El total con tu descuento fue: " + totalCarrito);
  }, 3000)
}

//Instrucción 6
agregarAlCarrito("Pantalones", 3);
agregarAlCarrito("Pantalones", 4);
agregarAlCarrito("Pantalones", 2);
agregarAlCarrito("Zapatos", 3);
agregarAlCarrito("Camisetas", 4);
agregarAlCarrito("Camiseta", 2);

  

quitarDelCarrito("Pantalones", 6);
quitarDelCarrito("Pantalones", 1);
quitarDelCarrito("Zapatos", 2);
quitarDelCarrito("Pantalones", 2);

agregarAlCarrito("Pantalones", 2);
agregarAlCarrito("Zapatos", 3);
console.log(carrito);

/*
let totalCarrito = calcularTotal();
totalCarrito = aplicarDescuento(totalCarrito);
console.log(totalCarrito);
*/

procesarCompra();