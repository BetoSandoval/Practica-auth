(function () {
var formulario = document.getElementById("formulario"),
  nombre = formulario.nombre,
  correo = formulario.correo,
  sexo = formulario.sexo,
  terminos = formulario.terminos,
  error = document.getElementById("error");

function validarNombre(e) {
  if (nombre.value == "" || nombre.value == null) {
    error.style.display = "block";
    error.innerHTML += "<li>Por favor completa el Nombre</li>";
    console.log("Por favor completa el nombre");

    e.preventDefault();
  } else {
    error.style.display = "none";
  }
}

function validarCorreo(e) {
  if (correo.value == "" || correo.value == null) {
    error.style.display = "block";
    error.innerHTML += "<li>Por favor escribe un correo</li>";
    console.log("Por favor escribe un Correo");

    e.preventDefault(e);
  } else {
    error.style.display = "none";
  }
}

function validarSexo(e) {
  if (sexo.value == "" || sexo.value == null) {
    error.style.display = "block";
    error.innerHTML += "<li>Por favor selecciona el sexo</li>";
    console.log("Por favor completa el sexo");

    e.preventDefault();
  } else {
    error.style.display = "none";
  }
}

function validarTerminos(e) {
  if ( terminos.checked == false ) {
    error.style.display = "block";
    error.innerHTML += "<li>Por favor acepta los terminos</li>";
    console.log("Por favor acepta los terminos");

    e.preventDefault();
  } else {
    error.style.display = "none";
  }
}

function validarForm(e) {
  error.innerHTML = "";

  validarNombre(e);
  validarCorreo(e);
  validarSexo(e);
  validarTerminos(e);
}
formulario.addEventListener("submit", validarForm);
}())

//Validar nombre de usario no sean numeros

// validar que el correo exista
