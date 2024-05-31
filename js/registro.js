const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const fecha = document.getElementById('fecha');
const terminos = document.getElementById('terminos');
const formRegistro = document.getElementById('form-registro');
// levanto los campos de error
const errorNombre = document.getElementById('error-nombre');
const errorApellido = document.getElementById('error-apellido');
const errorFecha = document.getElementById('error-fecha');
const errorEmail = document.getElementById('error-email');
const errorPassword = document.getElementById('error-password');
const errorPassword2 = document.getElementById('error-password2');
const errorTerminos = document.getElementById('error-terminos');

//si se termino de cargar el dom
document.addEventListener('DOMContentLoaded', function () {

    //en el evento submit valido que los campos esten llenos y no dejo que se envie automaticamente el formulario
    formRegistro.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("entro a la funcion");
        // limpio los mensajes de error
        errorNombre.innerText = "";
        errorApellido.innerText = "";
        errorFecha.innerText = "";
        errorEmail.innerText = "";
        errorPassword.innerText = "";
        errorPassword2.innerText = "";
        errorTerminos.innerText = "";

        if (nombre.value === '' || nombre.value == null) {
            e.preventDefault();
            errorNombre.innerText = "El nombre es obligatorio";
        }
        if (apellido.value === '' || apellido.value == null) {
            e.preventDefault();
            errorApellido.innerText = "El apellido es obligatorio";

        }

        if (fecha.value === '' || fecha.value == null) {
            e.preventDefault();
            errorFecha.innerText = "La fecha de nacimiento es obligatoria";
        }

        if (email.value === '' || email.value == null) {
            e.preventDefault();
            errorEmail.innerText = "El correo electrónico es obligatorio";
        }
        if (password.value === '' || password.value == null) {
            e.preventDefault();
            errorPassword.innerText = "La contraseña es obligatoria";
        }
        if (password2.value === '' || password2.value == null) {
            e.preventDefault();
            errorPassword2.innerText = "La contraseña es obligatoria";
        }


        if (!terminos.checked) {
            e.preventDefault();
            errorTerminos.innerText = "Debes aceptar los términos y condiciones";
        }


    });

});