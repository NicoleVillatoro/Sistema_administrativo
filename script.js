const menuButton = document.getElementById("usuarios");
//JESUS
const ventasButton = document.getElementById("ventas");
let ventasFormularioVisible = false; //variable para definir el estado del formulario ()
//
const submenu = document.getElementById("submenu");
const acciones = document.getElementById("acciones");
const formulario = document.getElementById("formulario");
const cancelarButton = document.getElementById("cancelar");
const mensaje = document.getElementById("mensaje");
let data = {}; // Almacena datos de alta para su posterior modificación
let seleccion = ""; // Almacena la opción seleccionada

menuButton.addEventListener("click", () => {
  submenu.classList.toggle("hidden");
  cancelarButton.style.display = "none";
  formulario.classList.add("hidden");
  mensaje.classList.add("hidden");
});

const opciones = ["empleados", "clientes", "proveedores", "productos"];
opciones.forEach((opcion) => {
  const boton = document.getElementById(opcion);
  boton.addEventListener("click", () => {
    submenu.classList.add("hidden");
    acciones.classList.remove("hidden");
    seleccion = opcion;
  });
});


//JESUS
ventasButton.addEventListener("click", () => {
  if (ventasFormularioVisible) {
    formulario.classList.add("hidden");
  } else {
    const ventasFormulario = `
  <input type="text" id="nombre-producto" placeholder="Nombre del producto">
  <input type="number" id="cantidad" placeholder="Cantidad">
  <input type="number" id="precio" placeholder="Precio">
  <select id="metodo-pago">
    <option value="efectivo">Efectivo</option>
    <option value="tarjeta">Tarjeta de crédito</option>
    <option value="transferencia">Transferencia bancaria</option>
  </select>
  <button class="button" id="guardar-venta">Guardar Venta</button>
  <div class="pregunta-factura">Desea facturar?</div>
  <button class="button factura-button" id="facturar-si">Sí</button>
  <button class="button factura-button" id="facturar-no">No</button>
`;
    formulario.innerHTML = ventasFormulario;
    formulario.classList.remove("hidden");
  }

  ventasFormularioVisible = !ventasFormularioVisible;
});
//

const empleadosFormulario = `
  <input type="text" id="nombre-empleado" placeholder="Nombre completo">
  <input type="text" id="curp" placeholder="CURP">
  <input type="text" id="rfc" placeholder="RFC">
  <input type="text" id="direccion" placeholder="Dirección">
  <input type="text" id="tel-contacto" placeholder="Teléfono de contacto">
  <input type="text" id="tel-emergencia" placeholder="Teléfono de emergencia">
  <button class="button" id="guardar-empleado">Guardar</button>
`;

const clientesFormulario = `
  <input type="text" id="razon-social" placeholder="Razón social">
  <input type="text" id="curp-cliente" placeholder="CURP">
  <input type="text" id="rfc-cliente" placeholder="RFC">
  <input type="text" id="direccion-cliente" placeholder="Dirección">
  <button class="button" id="guardar-cliente">Guardar</button>
`;

const proveedoresFormulario = `
  <input type="text" id="nombre-empresa" placeholder="Nombre de la empresa">
  <input type="text" id="nombre-proveedor" placeholder="Nombre del proveedor a cargo">
  <input type="text" id="producto-abastece" placeholder="Producto que abastece">
  <button class="button" id="guardar-proveedor">Guardar</button>
`;

const productosFormulario = `
  <input type="text" id="nombre-producto" placeholder="Nombre del producto">
  <input type="text" id="precio-producto" placeholder="Precio del producto">
  <input type="text" id="presentacion-producto" placeholder="Presentación del producto">
  <button class="button" id="guardar-producto">Guardar</button>
`;

const bajaFormulario = `
  <input type="text" id="nombre-eliminar" placeholder="Nombre a eliminar">
  <button class="button" id="eliminar-confirmar">Eliminar</button>
`;

const accionesOpciones = ["alta", "baja", "modificacion"];
accionesOpciones.forEach((opcion) => {
  const boton = document.getElementById(opcion);
  boton.addEventListener("click", () => {
    acciones.classList.add("hidden");
    formulario.innerHTML = ""; // Limpia cualquier formulario anterior
    cancelarButton.style.display = "inline";

    switch (opcion) {
      case "alta":
        formulario.innerHTML = "";
        break;
      case "baja":
        formulario.innerHTML = bajaFormulario;
        break;
      case "modificacion":
        formulario.innerHTML = "";
        break;
    }

    switch (opcion) {
      case "alta":
        switch (seleccion) {
          case "empleados":
            formulario.innerHTML = empleadosFormulario;
            break;
          case "clientes":
            formulario.innerHTML = clientesFormulario;
            break;
          case "proveedores":
            formulario.innerHTML = proveedoresFormulario;
            break;
          case "productos":
            formulario.innerHTML = productosFormulario;
            break;
        }
        break;
      case "baja":
        // Agrega formulario de baja si es necesario
        break;
      case "modificacion":
        // Agrega formulario de modificación si es necesario
        break;
    }

    formulario.classList.remove("hidden");
  });
});

cancelarButton.addEventListener("click", () => {
  formulario.innerHTML = "";
  formulario.classList.add("hidden");
  cancelarButton.style.display = "none";
  mensaje.classList.add("hidden");
});

// Lógica para guardar los datos ingresados en alta y mostrarlos en modificación
const guardarButton = document.getElementById("guardar");
if (guardarButton) {
  guardarButton.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const proveedor = document.getElementById("proveedor").value;
    const producto = document.getElementById("producto").value;
    const presentacion = document.getElementById("presentacion").value;
    if (nombre && proveedor && producto && presentacion) {
      data = { nombre, proveedor, producto, presentacion };
      formulario.innerHTML = "";
      formulario.classList.add("hidden");
      cancelarButton.style.display = "none";
      mensaje.classList.add("hidden");
    } else {
      mensaje.classList.remove("hidden");
    }
  });
}

// Lógica para cargar los datos en modificación
const modificarButton = document.getElementById("modificar");
if (modificarButton) {
  modificarButton.addEventListener("click", () => {
    document.getElementById("nombre-modificar").value = data.nombre;
    document.getElementById("nuevo-proveedor").value = data.proveedor;
    document.getElementById("nuevo-producto").value = data.producto;
    document.getElementById("nueva-presentacion").value = data.presentacion;
    formulario.classList.remove("hidden");
    mensaje.classList.add("hidden");
  });
}

// Implementa lógica para eliminar datos 


// Ayuda
const ayudaButton = document.getElementById("ayuda");
const preguntasFrecuentes = document.querySelectorAll(".faq-link");

ayudaButton.addEventListener("click", () => {
  preguntasFrecuentes.forEach((pregunta) => {
    pregunta.style.display = "block";
  });
});

// Agrega esta lógica para mostrar y ocultar respuestas
preguntasFrecuentes.forEach((pregunta) => {
  const respuestaLink = pregunta.querySelector(".respuesta-link");
  respuestaLink.addEventListener("click", (e) => {
    e.preventDefault();
    pregunta.classList.toggle("hidden");
  });
});
