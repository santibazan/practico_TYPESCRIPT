
//Ejercicio 2
console.log("Ejercicio 2: Corriendo desde typescript");

//Ejercicio 3

let saludo: string = "hola, typescript";
let num: number = 123;
let bool: boolean = true;
let fecha: Date =  new Date('2024-01-01');

const resultado = document.getElementById("resultado");

if(resultado){
    resultado.innerHTML = `
    <p>Saludo: ${saludo}</p>
    <p>Numero: ${num}</p>
    <p>Booleano: ${bool}</p>
    <p>Fecha: ${fecha.toLocaleDateString()}</p>
    `
}

//Ejercicio 4

function convertirNumero(numero: number): string{
    return numero.toString();
}

function mostrarNumero(numero: number){
    const resultadoElemento = document.getElementById("resultado1")

    if(resultadoElemento){
        const cadenaConvertida = convertirNumero(numero);
        resultadoElemento.innerHTML = `Número convertido a cadena: ${cadenaConvertida}`;
    }
}

mostrarNumero(123);

//Ejercicio 5

const arreglo = [1,2,3,4,5]

function sumaArrays(arreglo: number[]):number{
    let suma = 0;
    for(let i = 0; i < arreglo.length; i++){
        suma += arreglo[i];
    }
    return suma;
}

const sumaRealizada = sumaArrays(arreglo);
function mostrarSumaArray(){
    const sumaDeArreglos= document.getElementById("resultado2")
    if(sumaDeArreglos){
        sumaDeArreglos.innerHTML= `suma del array: ${sumaRealizada}`;
        
    }
}
mostrarSumaArray();

//Ejercicio 6

let estudiante = {
    nombre: "Santiago",
    edad: 22,
    curso: "Matematica"
}
function mostrarEstudiante(){
    const mostrarEstudiante= document.getElementById("resultado3")
    if(mostrarEstudiante){
        mostrarEstudiante.innerHTML=`
        <p>Estudiante: ${estudiante.nombre}</p>
        <p>Edad: ${estudiante.edad}</p>
        <p>Curso: ${estudiante.curso}</p>
        `
    }
}
mostrarEstudiante();

//Ejercicio 7

type Direccion = {
    calle: string,
    ciudad: string,
    codigo_postal: number
}
let direccion: Direccion  = {
    calle: "Doctor Carrillo",
    ciudad: "mendoza",
    codigo_postal: 5500
}
function mostrarEnHtml(){
    const mostrarDireccion = document.getElementById("resultado4")
    if(mostrarDireccion){
        mostrarDireccion.innerHTML=`Direccion: Calle: ${direccion.calle}, Ciudad: ${direccion.ciudad}, CP: ${direccion.codigo_postal}`
    }
}
mostrarEnHtml();
//Ejercicio 8
interface Usuario{
    nombre: string,
    correo: string,
    saludar(): string;
}
let user: Usuario = {
    nombre: "Santiago",
    correo: "Santiago.n.bazan@outlook.com",
    saludar(){
        return`Hola, mi nombre es ${user.nombre}`;
    }
}
function mostrarSaludo(){
    const saludoElemento = document.getElementById("resultado5");
    if(saludoElemento){
        saludoElemento.innerHTML = user.saludar();
    }
}
mostrarSaludo();

//Ejercicio 9
class Persona {
    nombre?: string;
    edad?: number;
    presentarse(){
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`;
    }

    constructor(nombre:string, edad:number){
        this.nombre= nombre;
        this.edad=edad;
    }
}
const persona = new Persona("Paula", 29)
persona.presentarse()
 
function mostrarPresentacion(){
    const presentarseElemento = document.getElementById("resultado6");
    if(presentarseElemento){
        presentarseElemento.innerHTML = persona.presentarse();
    }
}
mostrarPresentacion();

//Ejercicio 10

class caja<T>{
    private valor: T;

    constructor(valor: T){
        this.valor =valor;
    }
    public obtenerValor(): T{
        return this.valor;
    }

    public establecerValor(nuevoValor: T): void {
        this.valor= nuevoValor;
    }

}

const cajaString = new caja<string>("Mensaje secreto");
const cajaNumero = new caja<number>(42);

function mostrarValores() {
    const resultadoElemento = document.getElementById("resultado7");

    if(resultadoElemento){
        resultadoElemento.innerHTML = `
        <p>Contenido de cajaDeTexto: ${cajaString.obtenerValor()}</p>
        <p>Contenido de cajaDeNumero: ${cajaNumero.obtenerValor()}</p>
        `
    }
}
mostrarValores();
//Ejercicio 11
function identidad<T>(valor: T): T{
    return valor;
}
const valorNumero = identidad<number>(123);
const valorString = identidad<string>("texto");

function mostrarIdentidad(){
    const resultadoElemento = document.getElementById("resultado8");

    if (resultadoElemento){
        resultadoElemento.innerHTML =`
        <p>Identidad del numero: ${valorNumero}</p>
        <p>Identidad del texto: ${valorString}</p>
        `
    } 
}
mostrarIdentidad();

//Ejercicio 12
enum Color{
    Rojo = "Rojo",
    Azul= "Azul",
    Verde= "Verde"
}
const colorFav: Color = Color.Verde;

function mostrarColor(){
    const resultadoColor = document.getElementById("resultado9");

    if(resultadoColor){
        resultadoColor.innerHTML = `
        <p>Color favorito: ${colorFav}</p>
        `
    }
}
mostrarColor();
