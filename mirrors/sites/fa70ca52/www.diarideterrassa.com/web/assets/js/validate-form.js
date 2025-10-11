$(document).ready(function(){
    var Url = window.location.href;
    console.log(Url);
});

$("#enviar_form").click(function (event) {
  console.log("click");
  event.preventDefault();
  let mailFormat =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var numberFormat = /^[0-9]+$/;
  var nombre = $("#nombre").val();
  var telefono = $("#telefono").val();
  var email = $("#correo").val();
  var mensaje = $("#mensaje").val();
  var acepto = $("#aceptar-politicas").is(":checked");


  if (nombre.length < 1) {
    Swal.fire({
      icon: "error",
      title: "UPS!",
      text: 'El campo "nombre" es obligatorio',
    });
    $("#nombre").focus();
  } else if (email.length < 1) {
    Swal.fire({
      icon: "error",
      title: "UPS!",
      text: 'El campo "correo electrónico" es obligatorio',
    });
    $("#correo").focus();
  } else if (!mailFormat.exec(email)) {
    Swal.fire({
      icon: "error",
      title: "ERROR",
      text: "Ingresa una dirección de correo válida",
    });
  } else if (telefono.length < 1) {
    Swal.fire({
      icon: "error",
      title: "UPS!",
      text: 'El campo "teléfono" es obligatorio',
    });
    $("#telefono").focus();
  } else if (!numberFormat.exec(telefono)) {
    Swal.fire({
      icon: "error",
      title: "ERROR",
      text: "El campo solo acepta números",
    });
  } else if (mensaje.length < 1) {
    Swal.fire({
      icon: "error",
      title: "UPS!",
      text: 'El campo "mensaje" es obligatorio',
    });
    $("#mensaje").focus();
  } else if (!acepto) {
    Swal.fire({
      icon: "error",
      title: "UPS!",
      text: "Acepte las politicas de privacidad por favor",
    });
  } else {
    $.ajax({
      type: "POST",
      url: "/web/mailer/mail.php",
      data: $("#contact-form").serialize(),
      success: function (res) {
        console.log(res);
        if (res.code == 200) {
          Swal.fire({
            title: "Mensaje enviado con exito!",
            text: "Pronto nos pondremos en contacto contigo!",
            icon: "success",
          });
          setTimeout(() => {
            window.location.reload();
          }, 4000);
        } else {
          Swal.fire({
            title: "El mensaje no se ha enviado con exito!",
            text: "Hubo un error. Inténtelo de nuevo más tardetarde.",
            icon: "danger",
          });
        }
      },
      complete: function (res) {
        console.log(res);
      },
    });
  }
});
