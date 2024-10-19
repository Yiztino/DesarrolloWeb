import { obtenerDatosDeAPI } from "./components/data.js";
import { obtenerProductos, mostrarProductosDisponibles, agregarOquitarDelCarrito, comprar } from "./components/practica8.js";
// import { obtenerProductos } from "./components/practica8.js";
// import { mostrarProductosDisponibles } from "./components/practica8.js";
// import { agregarOquitarDelCarrito } from "./components/practica8.js";
// import { comprar } from "./components/practica8.js";

// obtenerDatosDeAPI();
// obtenerProductos();
// mostrarProductosDisponibles();
// agregarOquitarDelCarrito();
// comprar();
async function inicializarTienda() {
    
    await obtenerDatosDeAPI();
    obtenerProductos();
    mostrarProductosDisponibles();
    agregarOquitarDelCarrito();
    comprar();
}
  
inicializarTienda();
// import { obtenerDatosDeAPI } from "./components/data.js";
// import { obtenerProductos } from "./components/practica8.js";
// import { mostrarProductosDisponibles } from "./components/practica8.js";

// obtenerDatosDeAPI();
// obtenerProductos();
// mostrarProductosDisponibles();