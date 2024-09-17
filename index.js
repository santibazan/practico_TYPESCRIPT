//Ejercicio 2
console.log("Ejercicio 2: Corriendo desde typescript");
//Ejercicio 3
var saludo = "hola, typescript";
var num = 123;
var bool = true;
var fecha = new Date('2024-01-01');
var resultado = document.getElementById("resultado");
if (resultado) {
    resultado.innerHTML = "\n    <p>Saludo: ".concat(saludo, "</p>\n    <p>Numero: ").concat(num, "</p>\n    <p>Booleano: ").concat(bool, "</p>\n    <p>Fecha: ").concat(fecha.toLocaleDateString(), "</p>\n    ");
}
//Ejercicio 4
function convertirNumero(numero) {
    return numero.toString();
}
function mostrarNumero(numero) {
    var resultadoElemento = document.getElementById("resultado1");
    if (resultadoElemento) {
        var cadenaConvertida = convertirNumero(numero);
        resultadoElemento.innerHTML = "N\u00FAmero convertido a cadena: ".concat(cadenaConvertida);
    }
}
mostrarNumero(123);
//Ejercicio 5
var arreglo = [1, 2, 3, 4, 5];
function sumaArrays(arreglo) {
    var suma = 0;
    for (var i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}
var sumaRealizada = sumaArrays(arreglo);
function mostrarSumaArray() {
    var sumaDeArreglos = document.getElementById("resultado2");
    if (sumaDeArreglos) {
        sumaDeArreglos.innerHTML = "suma del array: ".concat(sumaRealizada);
    }
}
mostrarSumaArray();
//Ejercicio 6
var estudiante = {
    nombre: "Santiago",
    edad: 22,
    curso: "Matematica"
};
function mostrarEstudiante() {
    var mostrarEstudiante = document.getElementById("resultado3");
    if (mostrarEstudiante) {
        mostrarEstudiante.innerHTML = "\n        <p>Estudiante: ".concat(estudiante.nombre, "</p>\n        <p>Edad: ").concat(estudiante.edad, "</p>\n        <p>Curso: ").concat(estudiante.curso, "</p>\n        ");
    }
}
mostrarEstudiante();
var direccion = {
    calle: "Doctor Carrillo",
    ciudad: "mendoza",
    codigo_postal: 5500
};
function mostrarEnHtml() {
    var mostrarDireccion = document.getElementById("resultado4");
    if (mostrarDireccion) {
        mostrarDireccion.innerHTML = "Direccion: Calle: ".concat(direccion.calle, ", Ciudad: ").concat(direccion.ciudad, ", CP: ").concat(direccion.codigo_postal);
    }
}
mostrarEnHtml();
var user = {
    nombre: "Santiago",
    correo: "Santiago.n.bazan@outlook.com",
    saludar: function () {
        return "Hola, mi nombre es ".concat(user.nombre);
    }
};
function mostrarSaludo() {
    var saludoElemento = document.getElementById("resultado5");
    if (saludoElemento) {
        saludoElemento.innerHTML = user.saludar();
    }
}
mostrarSaludo();
//Ejercicio 9
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.presentarse = function () {
        return "Hola, mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os");
    };
    return Persona;
}());
var persona = new Persona("Paula", 29);
persona.presentarse();
function mostrarPresentacion() {
    var presentarseElemento = document.getElementById("resultado6");
    if (presentarseElemento) {
        presentarseElemento.innerHTML = persona.presentarse();
    }
}
mostrarPresentacion();
//Ejercicio 10
var caja = /** @class */ (function () {
    function caja(valor) {
        this.valor = valor;
    }
    caja.prototype.obtenerValor = function () {
        return this.valor;
    };
    caja.prototype.establecerValor = function (nuevoValor) {
        this.valor = nuevoValor;
    };
    return caja;
}());
var cajaString = new caja("Mensaje secreto");
var cajaNumero = new caja(42);
function mostrarValores() {
    var resultadoElemento = document.getElementById("resultado7");
    if (resultadoElemento) {
        resultadoElemento.innerHTML = "\n        <p>Contenido de cajaDeTexto: ".concat(cajaString.obtenerValor(), "</p>\n        <p>Contenido de cajaDeNumero: ").concat(cajaNumero.obtenerValor(), "</p>\n        ");
    }
}
mostrarValores();
//Ejercicio 11
function identidad(valor) {
    return valor;
}
var valorNumero = identidad(123);
var valorString = identidad("texto");
function mostrarIdentidad() {
    var resultadoElemento = document.getElementById("resultado8");
    if (resultadoElemento) {
        resultadoElemento.innerHTML = "\n        <p>Identidad del numero: ".concat(valorNumero, "</p>\n        <p>Identidad del texto: ").concat(valorString, "</p>\n        ");
    }
}
mostrarIdentidad();
//Ejercicio 12
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Azul"] = "Azul";
    Color["Verde"] = "Verde";
})(Color || (Color = {}));
var colorFav = Color.Verde;
function mostrarColor() {
    var resultadoColor = document.getElementById("resultado9");
    if (resultadoColor) {
        resultadoColor.innerHTML = "\n        <p>Color favorito: ".concat(colorFav, "</p>\n        ");
    }
}
mostrarColor();
