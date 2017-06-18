
<?php

  $muzza = $_POST["Muzzarella"];
  $jamon = $_POST["Jamon"];
  $bacon = $_POST["Bacon"];
  $palmitos = $_POST["Palmitos"];
  $pollo = $_POST["Pollo"];
  $huevo = $_POST["Huevo"];
  $cuatroquesos = $_POST["4Quesos"];

  $destino = "";
  $nombre = $_POST["nombre"];
  $correo = $_POST["correo"];
  $solicitud = $_POST["solicitud"];

  $gustos = $muzza . " " . $jamon . " " . $bacon . " " . $palmitos . " " . $pollo . " " . $huevo . " " . $cuatroquesos . " ";
  $contenido = "Gustos: " . $gustos . "\nNombre: " . $nombre . "\nCorreo: " . $correo . "\nSolicitud: " . $solicitud;

  mail($destino,"Nuevo pedido",$contenido);













?>
