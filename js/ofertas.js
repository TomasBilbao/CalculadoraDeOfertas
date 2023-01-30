let valorProductos = 0
let porcentajeOferta = 0
let precioFinal = 0
let valorDescuento = 0

function pedirNombre() {

    let nombre = prompt("¿Cuál es tu nombre?")

    alert("Hola " + nombre + ", bienvenido/a a nuestra calculadora de ofertas. En ella podrás calcular el precio final de un producto  (Ej. 1: ¿Cuál será el precio final de una botella de agua en oferta?.)")

    console.log("Calcular el precio final de un producto.")
}

pedirNombre()

function resolverCalculoSalida() {

    let valorProductos = Number(parseInt(prompt(
        "Ingresa el valor del producto/s en oferta cuyo precio final deseas calcular (No utilizar el signo $)")))

    while (isNaN(valorProductos)) {

        valorProductos = parseInt(prompt("Atención – El tipo de dato ingresado es incorrecto. Ingrese en valores numéricos el valor del producto/s cuyo precio final desea calcular con una oferta de descuento (No utilizar el signo $)."))
    }

    console.log("El precio stock del producto en oferta es de $" + valorProductos)

    let porcentajeOferta = Number(parseInt(prompt("Ingresa el porcentaje de descuento que tiene la oferta a calcular (No utilizar el signo %).")))

    while (isNaN(porcentajeOferta)) {

        porcentajeOferta = parseInt(prompt("Atención – El tipo de dato ingresado es incorrecto. Ingrese en valores numéricos, el porcentaje de descuento que tiene la oferta a calcular (No utilizar el signo %)."))
    }

    console.log("El descuento es del " + porcentajeOferta + "%")

    let calcularDescuento = (prompt("¿Desea realizar el cálculo? Responda Si en caso afirmativo y en caso contrario responda No."))

    if (calcularDescuento.toLowerCase() == "si") {

        let valorDescuento = valorProductos * porcentajeOferta / 100

        let precioFinal = valorProductos - valorDescuento

        console.log("El descuento es de $" + valorDescuento + " y el precio final del producto en oferta es de $" + precioFinal + ".")

        alert("El descuento es de $" + valorDescuento + " y el precio final del producto en oferta es de $" + precioFinal + ".")

    } else(calcularDescuento.toLowerCase() == "no")

    {
        let respuesta = prompt("¿Desea realizar el cálculo con otros valores? Responda Si en caso afirmativo y No si desea salir de la calculadora.")

        if (respuesta.toLowerCase() == "si")

        {
            resolverCalculoSalida()
        } else(respuesta.toLowerCase() == "no")

        {
            alert("¡Gracias por usar nuestra calculadora de ofertas!")
            console.log("¡Gracias por usar nuestra calculadora de ofertas!")
        }
    }

}

resolverCalculoSalida()