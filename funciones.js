$(document).ready(function() {

  // Dropdown Menu
  $('.dropdown-personalizado').click(function() {
    $('#myDropdown').toggle('fast');
  });

  // Abrir modal - Crea tu pizza
  $('.pedido-boton').click(function() {
    $('.modal-container').css({opacity: 0, display: 'flex'}).animate({opacity: 1}, 500);
    $('.creaTuPizza-modal').css({opacity: 0, display: 'flex'}).animate({opacity: 1}, 500);
    $('.creaTuPizza-modal').css('margin-top', '0px');
    $('.nombre').focus();
  });

  $('.pedido-boton-dropdown').click(function() {
    $('.modal-container').css({opacity: 0, display: 'flex'}).animate({opacity: 1}, 500);
    $('.creaTuPizza-modal').css({opacity: 0, display: 'flex'}).animate({opacity: 1}, 500);
    $('.creaTuPizza-modal').css('margin-top', '0px');
    $('.nombre').focus();
  });

  $('.pedir-btn-promo').click(function() {
    $('.modal-container').css({opacity: 0, display: 'flex'}).animate({opacity: 1}, 500);
    $('.creaTuPizza-modal').css({opacity: 0, display: 'flex'}).animate({opacity: 1}, 500);
    $('.creaTuPizza-modal').css('margin-top', '1400px');
    $('.nombre').focus();
  });

  // Cerrar modal - Crea tu Pizza
  $('.cerrarModal').click(function() {
    $('.pedido-confirm-container').hide();
    $('.modal-container').fadeOut(500);
  });

  // Animaciones random

  $('.logo').click(function() {
    $(this).transition('pulse');
  });


  // Scroll Funciones

    // Determinar la posicion de cada elemento para usarlo en la animacion del scroll

    var menusScroll = $('.menu-header').offset().top - 50;
    var footerScroll = $('.up-btn').offset().top;

  $(function(){

    $('.up-btn').click(function() {
      $('body').animate({scrollTop: 0}, "2000");
    });

    $('.inicio-btn').click(function() {
      $('body').animate({scrollTop:0}, "1000");
    });

    $('.menus-btn').click(function() {
      $('body').animate({scrollTop: menusScroll}, "2000");
    });

    $('.nosotros-btn').click(function() {
      $('body').animate({scrollTop: footerScroll}, "2000");
    });

    // $(window).scroll(function() {
    //
    // }); // window.scroll
  });

  // Verificacion de Formulario

    $('.nombre').focusout(function() {
      if ($('.nombre').val() == "") {
        $('label').addClass('deshabilitado');
        $('.nombre').transition('shake').delay(500);
        $('.nombre').focus();
      }
      else {
        $('.direccion').focus();
      }
    });

    $('.direccion').focusout(function() {
      if ($('.direccion').val() == "") {
        $('.direccion').transition('shake').delay(500);
        $('.direccion').focus();
      }
      else {
        $('label').removeClass('deshabilitado');
      }
    });


  // Envio con AJAX

  $('.pedir-btn').click(function(e) {

    e.preventDefault();
    // Gustos

      // Muzzarella
      if ($('#Muzzarella').prop('checked')) {
        var Muzzarella = "Muzzarella: Si";
      }

      else {
        var Muzzarella = "Muzzarella: No";
      }

      // Jamon
      if ($('#Jamon').prop('checked')) {
        var Jamon = "Jamon: Si";
      }

      else {
        var Jamon = "Jamon: No";
      }

      // Bacon
      if ($('#Bacon').prop('checked')) {
        var Bacon = "Bacon: Si";
      }

      else {
        var Bacon = "Bacon: No";
      }

      // Palmitos
      if ($('#Palmitos').prop('checked')) {
        var Palmitos = "Palmitos: Si";
      }

      else {
        var Palmitos = "Palmitos: No";
      }

      // Pollo
      if ($('#Pollo').prop('checked')) {
        var Pollo = "Pollo: Si";
      }

      else {
        var Pollo = "Pollo: No";
      }

      // Huevo
      if ($('#Huevo').prop('checked')) {
        var Huevo = "Huevo: Si";
      }

      else {
        var Huevo = "Huevo: No";
      }

      // 4Quesos
      if ($('#4Quesos').prop('checked')) {
        var Cuatroquesos = "Cuatro Quesos: Si";
      }

      else {
        var Cuatroquesos = "Cuatro Quesos: No";
      }

    // Datos

    // var nombre = $('.nombre').val();
    // var direccion = $('.direccion').val();
    
    var ContenidoCorreo = "Nombre= " + $('.nombre').val() + "\n" +
                          "&Solicitud= " + $('.direccion').val() + "\n" +
                          "&Muzarella= " + Muzzarella + "\n" +
                          "&Jamon= " + Jamon + "\n" +
                          "&Bacon= " + Bacon + "\n" +
                          "&Palmitos= " + Palmitos + "\n" +
                          "&Pollo= " + Pollo + "\n" +
                          "&Huevo= " + Huevo + "\n" +
                          "&Cuatro Quesos= " + Cuatroquesos;

    $.ajax({
      url: 'enviar.php',
      type: 'POST',
      data: ContenidoCorreo,
      success: function () {
        // Animacion y mensaje en verde con el tiempo de llegada del pedido
        $('.modal-container').fadeOut(500);
        $('.pedido-confirm-container').css('display', 'flex').delay(600).fadeIn(500)
        .delay(2500).fadeOut(500);
        $('.nombre').val("");
        $('.direccion').val("");
      }
    });

  }); // Fin .click llena variables






































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
