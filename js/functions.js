console.log("prueba de conexion");

//tipo de varibales 

// const para variables constantes
const pi = 3.1416;
const pu = 2.54;
const name = "Caleb Acosta";


// var para variables globales
var cal_days = 15;


// let para variables de bloque o locales; 
let j = 0;
let count = 1;


//Formas de impresion 

//alert
//alert(name);

//console
console.log(name);
console.log(cal_days);
console.log("15");

//pantalla - body
document.write(name);
document.getElementById("box_one").innerHTML = "<h1>Caleb Acosta</h1>";
//document.getElementById("box_Two").innerText = "<h1>Caleb Acosta</h1>";

//librerias 
Swal.fire({

    icon:'info',
    title:'caleb acosta',
    text: name,
    footer: name,
    showCofirmButton: false,
    timer: 2000,
    position:'center-end'
}
  )


//  Swal.fire(name)

//tipos de datos;

//numericos
var number = 10;
var number_two = 2.3;

//String
var text="Soy un texto";

//booleanos

var boolean = true; // false

//array

let array = [1,2,3,4,5];
let array_text = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
let array_mix = [1,"as",2,true];
let array_mul = [

    {name:"Caleb",last_name:"Acosta",age:"18"},
    {name:"pedro",last_name:"ortiz",age:"23"},
    {name:"juan",last_name:"duarte",age:"3"},
    {name:"pablo",last_name:"martinez",age:"12"}
];

//****************Operadores Basicos 
//suma 
var suma = number + number_two;
console.log("suma = "+ suma);

//resta 
var resta = number - number_two;
console.log("resta = "+resta);

//multiplicacion
var multiplicacion = number * number_two;
console.log("multiplicacion = "+ suma);

//Division 
var resta = number / number_two;
console.log("Division = "+resta);

//modulo

var modulo = number % number_two;
console.log("modulo = "+modulo);

console.log(
    "suma = "+ suma+ "\n"+ 
    "resta = "+resta+ "\n"+ 
    "multiplicacion = "+ multiplicacion+ "\n"+ 
    "Division = "+resta+ "\n"+ 
    "modulo = "+modulo
);

var respuesta =
"suma = "+ suma+ "<br>"+ 
"resta = "+resta+ "<br>"+ 
"multiplicacion = "+ multiplicacion+"<br>"+ 
"Division = "+resta+"<br>"+ 
"modulo = "+modulo

Swal.fire(respuesta);

Swal.fire({
    showConfirmButton: false,
    backgraund: '#000',
    icon: 'success',
    title:'Respuesta',
    html:respuesta
});

