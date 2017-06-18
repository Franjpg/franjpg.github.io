
<?php

  $muzza = $_GET["Muzzarella"];
  $jamon = $_GET["Jamon"];
  $bacon = $_GET["Bacon"];
  $palmitos = $_GET["Palmitos"];
  $pollo = $_GET["Pollo"];
  $huevo = $_GET["Huevo"];
  $cuatroquesos = $_GET["4Quesos"];

  $destino = "franciscodufey@gmail.com";
  $nombre = $_GET["nombre"];
  $correo = $_GET["correo"];
  $solicitud = $_GET["solicitud"];

  $gustos = $muzza . " " . $jamon . " " . $bacon . " " . $palmitos . " " . $pollo . " " . $huevo . " " . $cuatroquesos . " ";
  $contenido = "Gustos: " . $gustos . "\nNombre: " . $nombre . "\nCorreo: " . $correo . "\nSolicitud: " . $solicitud;

  mail($destino,"Nuevo pedido",$contenido);
  header("Location:index.html");













?>
