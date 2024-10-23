function sumaArea(base, altura) {
    base = parseInt(prompt("Ingrese la base en cm:"));
    altura = parseInt(prompt("Ingrese la altura en cm:"));
    total = base + altura;
    precioFinal = total * precioProducto;

    alert(
        "La suma de la base por altura: " +
        base +
        "+" +
        altura +
        "=" +
        total +
        "cm"
    );

    return precioFinal;
}

function multiplicacionArea(base, altura) {
    base = parseInt(prompt("Ingrese la base en cm:"));
    altura = parseInt(prompt("Ingrese la altura en cm:"));
    total = (base * altura)/100;
    precioFinal = (total * precioProducto)/100;

    alert(
      "La multiplicacion de la base por altura: " +
        base / 100 +
        "x" +
        altura / 100 +
        "=" +
        total / 100 +
        "m"
    );

    return precioFinal;
}

function suma(altura) {
    altura = parseInt(prompt("Ingrese la altura total de las letras en cm:"));
    precioFinal = precioProducto*altura;

    return precioFinal;
}