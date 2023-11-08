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

    {name:"Caleb",last_name:"Acosta",age:18},
    {name:"pedro",last_name:"ortiz",age:23},
    {name:"juan",last_name:"duarte",age:3},
    {name:"pablo",last_name:"martinez",age:12}
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

// OPERADORES LOGICOS
// AND && con if


var bool = false;
var numeric = 7;
if (!bool && numeric == 7){
    console.log("ENTRA IF");
}
else{
    console.log("ENTRA ELSE");
}


//      OR || con if
var age = 31;
if (age == 32 || numeric === 7){
    console.log("Entra en if");
    age+=2;
}
else {
    console.log("entra en else");
    age--;
}
console.log(age);


//             FOR 
var size =array_text.length;     // saber la longitud del array 
for(let i=0; i<size;i++){
    console.log(array_text[i]+"  "+(i+1));
}

//WHILE
let position = 0;
while (position<array_text.length){
    console.log(array_text[position]+(position+1))
    position++;
}
// do while
let w=0;
do {
    console.log(array_text[w]+(1+w));
    w++;
} while (w<array_text.length)




//        FUNCIONES Y EVENTOS

function box_onblur(){
    const box_onblur = document.querySelector("#box_onblur");
    if(box_onblur.value.length<=2){
        alert("PROBLEMAS");
    }
        
}

const btn_changeColor = document.querySelector("#change_color");

btn_changeColor.addEventListener("click",() => {
    document.body.style.backgroundColor = "red";
    document.body.style.color= "#fff";
});


const form       = document.getElementById("form_register");
const nombres    = document.getElementById("nombres");
const apellidos  = document.getElementById("apellidos");
const validation = document.getElementById("validation");

form.addEventListener("submit", name_event =>{
    name_event.preventDefault();

    let info="";
    if (nombres.value.length <=2 || apellidos.value.length <=2){
        info += "nombres o apellidos incorrectos"
        validation.style.color = "red";
    }
    else{
        info += "su nombres es: "+nombres.value + " "+" Su apellido es: "+ apellidos.value
        validation.style.color = "green";
    }
    validation.innerText= info;
})


function load_page(){
    document.getElementById("nombres").focus();
    document.getElementById("apellidos").disabled = true;
    let date = new Date();
    console.log(date.getMonth()+1);
    for(let i=0;i<array_mul.length;i++){
        console.log(array_mul[i].name);
    }
 }
 
function validate (){
    let nombre = document.getElementById("nombres").value;
    console.log(nombres);
    alert(nombre.split());
    if (nombre.length > 2){
        document.getElementById("apellidos").disabled = false;
        document.getElementById("apellidos").focus();
        document.getElementById("nombres").value = "";
    }
}