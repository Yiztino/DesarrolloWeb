const d = document;
const $form = d.querySelector("#register-form");
const $nameInput = d.querySelector("#name");
const $nameError = d.querySelector("#name-error");
const $emailInput = d.querySelector("#email");
const $emailError = d.querySelector("#email-error");
const $passwordInput = d.querySelector("#password");
const $passwordError = d.querySelector("#password-error");
const $confirmPasswordInput = d.querySelector("#confirm-password");
const $confirmPasswordError = d.querySelector("#confirm-password-error");
const $successMessage = d.querySelector("#success-message");
const $errorsMessages = d.querySelectorAll(".error");
const $loader = d.querySelector("#loader");
const $mensajeLoader = d.querySelector("#mensajeLoader")
// Función de Validación del Formulario
function validateForm(e) {
  // Reiniciar mensajes de error y éxito
  $errorsMessages.forEach((el) => {
    el.innerText = "";
  });
  $successMessage.innerText = "";

  let isValid = true;

  //Validar Nombre
  let namePattern = /^[A-Za-záéíóúÁÉÍÓÚÑñüÜ\s]+$/;
  if ($nameInput.value.trim() === "") {
    $nameError.innerText = "El nombre es obligatorio";
    isValid = false;
  } else if (!namePattern.test($nameInput.value.trim())) {
    $nameError.innerText = "El formato del nombre no es válido";
    isValid = false;
  }

  //Validar Email
  let emailPattern = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  if ($emailInput.value.trim() === "") {
    $emailError.innerText = "El email es obligatorio";
    isValid = false;
  } else if (!emailPattern.test($emailInput.value.trim())) {
    $emailError.innerText = "El formato del correo no es válido";
    isValid = false;
  }

 // Validar Password
if ($passwordInput.value.trim() === "") {
  $passwordError.innerText = "La contraseña es obligatoria";
  isValid = false;
} else if ($passwordInput.value.trim().length < 8) {
  $passwordError.innerText = "La contraseña debe tener al menos 8 caracteres";
  isValid = false;
} else if (!/[A-Z]/.test($passwordInput.value)) {
  $passwordError.innerText = "La contraseña debe contener al menos una letra mayúscula";
  isValid = false;
} else if (!/[a-z]/.test($passwordInput.value)) {
  $passwordError.innerText = "La contraseña debe contener al menos una letra minúscula";
  isValid = false;
} else if (!/[0-9]/.test($passwordInput.value)) {
  $passwordError.innerText = "La contraseña debe contener al menos un número";
  isValid = false;
} else if (!/[!@#$%^&*(),.?":{}|<>]/.test($passwordInput.value)) {
  $passwordError.innerText = "La contraseña debe contener al menos un carácter especial";
  isValid = false;
}

  //Validar Confirmar Password
  if ($confirmPasswordInput.value.trim() !== $passwordInput.value.trim()) {
    $confirmPasswordError.innerText = "Las contraseñas no coinciden";
    isValid = false;
  }

  if (!isValid) {
    //Prevenir el envío del formulario si hay errores
    e.preventDefault();
  } else {
    e.preventDefault();
    $loader.classList.remove("hidden");
  cuentaRegresiva(5);
  setTimeout(function(){
      $loader.style.display = 'none'; 
      print("quitar hidden")
      //$successMessage.classList.remove("hidden");
      $successMessage.innerText = "Formulario enviado exitosamente.";
      $form.reset();
      //console.log("El total con tu descuento fue: " + totalCarrito);
  }, 5000)
   
    
    // Aquí puedes manejar el envío real de datos a un servidor, por ejemplo, usando fetch.
  }
}
function cuentaRegresiva(segundosParaConfirmar){
    let tiempoRestante = segundosParaConfirmar; 
    //console.log("Tiempo restante para confirmar tu compra: ")
    $mensajeLoader.textContent = `Procesando  ${tiempoRestante}`;
    $loader.style.display = `block`;
    let intervalo = setInterval(function() {
      if (tiempoRestante > 0) {
          tiempoRestante--;
          $mensajeLoader.textContent = `Procesando: ${tiempoRestante}`;
      } else {
          clearInterval(intervalo);
          $mensajeLoader.textContent = `¡Compra confirmada!`;
      }
  }, 1000);
}
$form.addEventListener("submit", validateForm);