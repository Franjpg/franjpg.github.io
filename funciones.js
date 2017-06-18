$(document).ready(function() {

  // Dropdown Menu
  $('.dropdown-personalizado').click(function() {
    $('#myDropdown').toggle('fast');
  });

  // Abrir modal - Crea tu pizza
  $('.pedido-boton').click(function() {
    $('.modal-container').css({opacity: 0, display: 'flex'}).animate({opacity: 1}, 500);
    $('.creaTuPizza-modal').css({opacity: 0, display: 'flex'}).animate({opacity: 1}, 500);
  });

  $('.pedido-boton-dropdown').click(function() {
    $('.modal-container').css({opacity: 0, display: 'flex'}).animate({opacity: 1}, 500);
    $('.creaTuPizza-modal').css({opacity: 0, display: 'flex'}).animate({opacity: 1}, 500);
  });

  // Cerrar modal - Crea tu Pizza
  $('.cerrarModal').click(function() {
    $('.pedido-confirm-container').hide();
    $('.modal-container').fadeOut(500);
  });

  // // Pick a pizza Button error
  // $('.pedir-btn').click(function() {
  //   $(this).transition('shake');
  // });

  // Pedido Realizado

  // $('.pedir-btn').click(function() {
  //   $('.modal-container').fadeOut(500);
  //   $('.pedido-confirm-container').css('display', 'flex').delay(600).fadeIn(500)
  //   .delay(2500).fadeOut(500);
  // });

  // Comprobar Formulario

  // var correo = $('.correo').val();
  //
  // $('.pedir-btn').click(function() {
  //
  //   if (correo = '') {
  //     $('.pedir-btn').text('Error');
  //   }
  //
  // });

  // Envio con AJAX

  $('.pedir-btn').click(function() {

    // Gustos

      // Muzzarella
      if ($('#Muzzarella').prop('checked')) {
        var Muzzarella = "Si";
      }

      else {
        var Muzzarella = "No";
      }

      // Jamon
      if ($('#Jamon').prop('checked')) {
        var Jamon = "Si";
      }

      else {
        var Jamon = "No";
      }

      // Bacon
      if ($('#Bacon').prop('checked')) {
        var Bacon = "Si";
      }

      else {
        var Bacon = "No";
      }

      // Palmitos
      if ($('#Palmitos').prop('checked')) {
        var Palmitos = "Si";
      }

      else {
        var Palmitos = "No";
      }

      // Pollo
      if ($('#Pollo').prop('checked')) {
        var Pollo = "Si";
      }

      else {
        var Pollo = "No";
      }

      // Huevo
      if ($('#Huevo').prop('checked')) {
        var Huevo = "Si";
      }

      else {
        var Huevo = "No";
      }

      // 4Quesos
      if ($('#4Quesos').prop('checked')) {
        var Cuatroquesos = "Si";
      }

      else {
        var Cuatroquesos = "No";
      }


    // Datos

    var nombre = $('.nombre').val();
    var correo = $('.correo').val();
    var solicitud = $('.soliditud').val();
    var ContenidoCorreo =
    "Nombre: " + nombre + "\n" +
    "Correo: " + correo + "\n" +
    "Solicitud: " + solicitud + "\n" +
    "Muzarella: " + Muzzarella + "\n" +
    "Jamon: " + Jamon + "\n" +
    "Bacon: " + Bacon + "\n" +
    "Palmitos: " + Palmitos + "\n" +
    "Pollo: " + Pollo + "\n" +
    "Huevo: " + Huevo + "\n" +
    "Cuatro Quesos: " + Cuatroquesos;

  }); // Fin .click llena variables


  $.ajax({
    url: 'enviar.php',
    type: 'POST',
    data: ContenidoCorreo,
    success: function () {
      $('.modal-container').fadeOut(500);
      $('.pedido-confirm-container').css('display', 'flex').delay(600).fadeIn(500)
      .delay(2500).fadeOut(500);
    }
  })
  .done(function() {
    console.log("success");
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });




































});

  /*/// Javascript Vanilla ///*/

  /* Dropdown */


  // Close the dropdown menu if the user clicks outside of it
  // window.onclick = function(event) {
  //   if (!event.target.matches('.dropbtn')) {
  //
  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }
