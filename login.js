function validarCredencialesFacil(correo, password) {
  const datosUsuario = window.UsuariosEscupi[correo];
  if (!datosUsuario) {
    alert("No existe el usuario " + correo);
    return false;
  }

  if (datosUsuario.password !== password) {
    alert("La contraseña no es correcta");
    return false;
  }

  return true;
}

function ingresarFacil(correo) {
  if (correo === "leonperriman@escupiteraoficial.es") {
    window.location.href = "admin.html";
  } else {
    window.location.href = "index.html";
    alert("Sesión iniciada correctamente");
  }
}

function iniciarSesion() {
  var sCorreo = "";
  var sContrasenna = "";
  var bAcceso = false;

  sCorreo = document.querySelector("#txtCorreo").value;
  sContrasenna = document.querySelector("#txtContrasenna").value;

  bAcceso = validarCredencialesFacil(sCorreo, sContrasenna);

  if (bAcceso == true) {
    localStorage.setItem("usuario", sCorreo);
    ingresarFacil(sCorreo);
  }
}

var boton = document.getElementById("btnIngresar");
boton.addEventListener("click", iniciarSesion);
