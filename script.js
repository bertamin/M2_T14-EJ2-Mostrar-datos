var estaciones;
estaciones = prompt("Introduce un número del 1 al 4", "1, 2, 3 o 4");

switch (estaciones){
  case "1":
    document.write("Invierno");
    break;
  case "2":
    document.write("Otoño");
    break;
  case "3":
    document.write("Primavera");
    break;
  case "4":
    document.write("Verano");
    break;
  default:
    document.write("Ese número no es valido");

}