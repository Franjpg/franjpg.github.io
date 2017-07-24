$(document).ready(function() {

  $('.btn').click(function() {
    var pin = $('.pin').val();
    if (pin!="3d2017") {
      $('.error').fadeIn(500)
      $('.inicio').css('background-color', 'red');
    }
    else {
      $('.inicio').fadeOut(600);
    }
  });

  // Movete

  $('.moveteoption').click(function() {
    $('.movete').css('display', 'flex');
    $('main').fadeOut(500);
    $('.movete').fadeIn(500);
  });

  $('.backMovete').click(function() {
    $('.movete').fadeOut(500);
    $('main').fadeIn(500);
  });

  // Mapa

  $('.mapaoption').click(function() {
    $('main').fadeOut(500);
    $('.mapa').fadeIn(500);
  });

  $('.backMap').click(function() {
    $('.mapa').fadeOut(500);
    $('main').fadeIn(500);
  });

  // Transporte

  $('.transoption').click(function() {
    $('main').fadeOut(500);
    $('.transporte').fadeIn(500);
  });

  $('.backTrans').click(function() {
    $('.transporte').fadeOut(500);
    $('main').fadeIn(500);
  });

  // Tramites

  $('.tramitesoption').click(function() {
    $('main').fadeOut(500);
    $('.tramites').fadeIn(500);
  });

  $('.backTramites').click(function() {
    $('.tramites').fadeOut(500);
    $('main').fadeIn(500);
  });





























});
