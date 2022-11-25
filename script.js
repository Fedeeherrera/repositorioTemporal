console.log("HOLA");

let inputName = document.getElementById("inputName")
let inputEmail = document.getElementById("inputEmail")
let inputPassword = document.getElementById("inputPassword")
let inputCheckbox = document.getElementById("inputCheckbox")
let buttonSubmit = document.getElementById("buttonSubmit")

buttonSubmit.addEventListener("click", (event)=> {
    event.preventDefault()
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Formulario Enviado',
        showConfirmButton: true,
        timer: 1500
      })
})