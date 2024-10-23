let base=0;
let altura=0;
let total;
let material;
let material3D;
let precioProducto;
let precioFinal;

while (true) {
  alert("Que producto se cotizara?:");
  material = parseInt(
    prompt("(1)Caja de Acrilico (2)Caja de Lona (3)Neon (4)Neon 2.0 (5)Impresion Lona (6)Impresion Vinil (7)Letras 3D (8)Letras Planas (9)Banner Lona")
  );

  /* caja circulas precio 45 x cm */

  switch (material) {
    case 1:
      alert("Acrilico");
      precioProducto = 18;
      total = sumaArea(base, altura);
      break;

    case 2:
      alert("Lona");
      precioProducto = 15;
      total = sumaArea(base, altura);
      break;

    case 3:
      alert("Neon");
      precioProducto = 18;
      total = sumaArea(base, altura);
      break;
    case 4:
      alert("Neon 2.0");
      precioProducto = 25;
      total = sumaArea(base, altura);
      break;

    case 5:
      alert("Impresion Lona");
      calidad = parseInt(
        prompt("(1)720 (2)Alta (3)UV")
      );
      switch (calidad) {
        case 1:
          precioProducto = 100;
          break;
        case 2:
          precioProducto = 240;
          break;
        case 3:
          precioProducto = 280;
          break;
      
        default:
          break;
      }
      total = multiplicacionArea(base, altura);
      break;

    case 6:
      alert("Impresion vinil");
      calidad = parseInt(
        prompt("(1)720 (2)Alta (3)UV (4)UV 3M")
      );
      switch (calidad) {
        case 1:
          precioProducto = 190;
          break;
        case 2:
          precioProducto = 280;
          break;
        case 3:
          precioProducto = 400;
          break;
        case 4:
          precioProducto = 600;
          break;
      
        default:
          break;
      }
      total = multiplicacionArea(base, altura);
      break;

    case 7:
      alert("Letras 3d");

      
      material3D = parseInt(
        prompt("(1)Acrilico con luz (2)Aluminio con luz (3)Acrilico s/n luz (4)Aluminio s/n luz")
      );

      switch (material3D) {
        case 1:
          precioProducto = 35;
          break;
        case 2:
          precioProducto = 25;
          break;
        case 3:
          precioProducto = 30;
          break;
        case 4:
          precioProducto = 20;
          break;
      
        default:
          break;
      }
      total = suma(altura);
      break;

    case 8:
      alert("Letras Planas");

      
      material3D = parseInt(
        prompt("(1)Acrilico (2)Aluminio")
      );

      switch (material3D) {
        case 1:
          precioProducto = 18;
          break;
        case 2:
          precioProducto = 12;
          break;
      
        default:
          break;
      }

      total = suma(altura);
      break;

    case 9:
      alert("Banner");
      calidad = parseInt(
        prompt("(1)720 (2)Alta")
      );
      switch (calidad) {
        case 1:
          precioProducto = 800;
          break;
        case 2:
          precioProducto = 900;
          break;
      
        default:
          break;
      }
      total = multiplicacionArea(base, altura);
      break;

    default:
      alert("Opcion No Valida. Ingrese el Numero de la Opcion Deseada.");
      break;
  }

  alert("Precio: " + total);
}