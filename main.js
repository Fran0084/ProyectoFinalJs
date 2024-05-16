// // E-COMMERS TIENDA DE PRODUCTOS 
// // LOGGIN DE USUARIO CON 3 INTENTOS

// let usuario = prompt("ingrese su nombre");
// let contraseña = prompt("ingrese su contraseñan");

// let intentos = 2;

// while ((usuario != "Francisco" || usuario != "francisco") && contraseña != "pass") {

//     alert(`Su contraseña es incorrecta, le quedan ${intentos} intentos permitidos`)
//     intentos--
//     prompt("Ingrese nuevamente su contraseña");




//     if (intentos == 0) {
//         alert(`Usted llego al limite maximo de errores permitidos, por favor intente mas tarde`)
//         break;
//     }

// }

// if (usuario == "Francisco" || usuario == "francisco" && contraseña == "pass") {

//     alert(`Bienvenido Fran, te estabamos esperando`);

// }


// VARIABLES DE PRODUCTOS PRODUCTOS

// let bebidasSinAlcohol = ["agua", "gaseosas", "jugo", "energizantes"];
// let bebidasConAlcohol = ["cerveza", "vino", "gin", "fernet", "vodka"];


// // Bebidas sin alcohol


// class BebidasNoAlcoholicas {
//     constructor(marca, tamano, sabor, precio) {
//         this.marca = marca;
//         this.tamano = tamano;
//         this.sabor = sabor;
//         this.precio = Number(precio);
//     }
// }


// let cocaCola = new BebidasNoAlcoholicas("Coca Cola", 2.25, "Zero", 2500);
// let sprite = new BebidasNoAlcoholicas("Sprite", 2, "original", 1890);
// let fanta = new BebidasNoAlcoholicas("fanta", 2.50, "naranja", 2750);
// let pasoDeLosToros0 = new BebidasNoAlcoholicas("Paso de los Toros", 2, "Pomelo", 1890);
// let aguaMineralSinGas = new BebidasNoAlcoholicas("Villa del Sur", 1.75, "Mineral sin gas", 1500);
// let aguaMineralConGas = new BebidasNoAlcoholicas("Villa del sur", 1.75, "Mineral con Gas", 1650);
// let energizanteSpeed= new BebidasNoAlcoholicas("Speed", 450, "original", 1500);
// let monster= new BebidasNoAlcoholicas("Monster", 450, "naranja", 1850);




// // Bebidas con alcohol 

// class BebidasAlcoholicas {
//     constructor(marca, tamaño, precio) {
//         this.marca = marca;
//         this.tamaño = tamaño;
//         this.precio = precio;
//     }
// }

// let cervezas = new BebidasAlcoholicas(["heineken", "stella", "miller"], [330, 720, 900], [1200, 1600, 2000]);
// let fernet = new BebidasAlcoholicas(["Branca", "buhero"], [750, 1000], [8000, 9000, 12000]);
// let vinos = new BebidasAlcoholicas(["Norton", "Lopez", "Termidor"], 750, [4000, 4500, 5000]);


// document.write(cervezas.marca[1] + "<br>");
// document.write(cervezas.tamaño[2] + "<br>");
// document.write(calcularIva(cervezas.precio[0]) + "<br>");


// document.write("<br>" +"<br>" +"<br>" );

// document.write(cervezas.marca[2] + "<br>");
// document.write(cervezas.tamaño[2] + "<br>");
// document.write(calcularIva(cervezas.precio[2]) + "<br>");



// function calcularIva(num1) {
//     let resultadoCalculoIva = num1 * 1.21

//     return resultadoCalculoIva;

// }





// document.write(`${cocaCola.marca}: ${calcularIva(cocaCola.precio)}`);








// FUNCIONES DE ORDEN SUPERIOR





// function iva(num1) {
//     let calculoIva = num1 * 1.21;

//     document.write(`El precio del producto seleccionado es de ${calculoIva} <br>`)

//     return calculoIva
// }

// iva(vinos.precio[1]);
// iva(cervezas.precio[2]);
// iva(fernet.precio[0]);

// function AlertaVino() {

//     if (vinos.precio[1] > 3000) {

//         console.log("su vino es carito")
//     }

// }

// AlertaVino();



// ENVIO
// let precioEnvioCaba = 5000;
// let precioEnvioGba = 8000;



// let empleado = {
//     nombre: "juan",
//     edad: 30,
// };


// function generarInforme(empleado) {
//     return function () {

//         document.write(`informe de la persona: ${empleado.nombre}<br>`);
//         document.write(`informe de la edad: ${empleado.edad}<br>`);
//     }
// }

// function generarOtroInforme(empleado) {
//     return function () {

//         document.write(`Este es otro informe de prueba: ${empleado.nombre}<br>`)
//         document.write(`Este es otro informe de prueba: ${empleado.edad}<br>`)



//     }
// }



// let InformeUno = generarInforme(empleado);
// let InformeDos = generarOtroInforme(empleado);


// InformeUno();
// InformeDos();





// PRUEBA DE UNA FUNCION CONTENEDORA DE OTRA FUNCION




// let numeros = [25,40,50,55,75];

// numeros.forEach((numero)=>{
//     document.write(numero)

// })




// SECCION AGREGADA SNACKS FILTER

// let snacks = ["Papas fritas","mani","chicitos","palitos",]
// let precioSnacks = [ 200, 300, 400, 500 , 600];


// let papas= snacks.filter((snack) => snack === "Papas fritas");
// document.write(papas);


// // SECCION AGREGADA SNACKS MAP

// let productos = [
//     { nombre: "Lays Clasicas", precio: 3000 },
//     { nombre: "Mani Pehuamar", precio: 3200 },
//     { nombre: "Palitos Peps", precio: 1800 }
// ];

// let nombres = productos.map((productos)=> productos.nombre);
// let precios = productos.map ((productos) => productos.precio);

// document.write(nombres);
// document.write(precios);





// function precioSnack(nombre, valor){

//     document.write(`El precio de las papas fritas ${nombre} es de $ ${valor}`)
// };

// precioSnack("Lays", 5);




// let restar = (a, b) => a - b

// document.write(restar(5, 1));


// function sumar (num1, num2 ){
//     let resultadoSuma = num1 + num2; 

//     document.write(`El valor de la suma es: ${resultadoSuma}<br>`);

//     return resultadoSuma;
// }


// sumar(5,5);
// sumar(10,10.5);






















// let cursos = [
//     { nombre: "web", precio: 22000},
//     { nombre: "React Js", precio: 15000},
//     { nombre: "Javascript", precio: 5000}
// ]

// // EJEMPLOS CON SOME 

// // let resultado = cursos.some ((el) => el.nombre == "web");

// // console.log(resultado + "<br>");


// // let resultado2= cursos.some ((el) => el.nombre === "sj");

// // console.log(resultado2);



// // EJEMPLOS CON MAP

// let resultado = cursos.map ((el) => el.nombre); 

// console.log(resultado); 

// let resultado2= cursos.map ((el) => el.precio); 

// console.log(resultado2)



// // EJEMPLO CON SORT AGREGANDO UNA VARIABLE. 
// // SI NO SE HACE CON UNA VARIABLE HAY QUE TENER CUIDADO PORQUE EL METODO SORT DESTRUYE EL ARRAY, YA QUE LO DEVUELVE CON LA MODIFICACION

// let numeros = [1, 2, 3, 4, 5, 6];

// let resultado = numeros.sort((a, b) => b - a);

// console.log(resultado)



// let productos = [
//     { nombre: "Agua sin gas", precio: 2500 },
//     { nombre: "Sprite", precio: 3500 },
//     { nombre: "Coca Cola", precio: 3700 }
// ]


// // let resultado = productos.map((elemento) => elemento.nombre);
// // let resultado2 = productos.map((elemento) => elemento.precio);


// // console.log(resultado)
// // console.log(resultado2)


// let actualizacionDePrecioPorProducto = productos.map((elemento) => {
//     return {
// nombre: "Hola " + elemento.nombre,
//         precio: elemento.precio * 5,

//     }
// }
// )

// console.log(actualizacionDePrecioPorProducto)



// OBJETO MATH. 





// console.log (Math.sqrt(9)); 

// let objetos = 12;

// console.log(Math.sqrt(objetos))



// MATH.RANDOM

// console.log(Math.random());

// console.log(Math.random());

// console.log(Math.random());


// EJEMPLO PARA GENERAR UN CODIGO DE DESCUENTO CON LA MATH.RANDOM

// let generarCodigoDescuento = () => {
//   let codigo = Math.floor(Math.random() *10000);

//   return codigo;
// }

// let codigoDescuento = generarCodigoDescuento();

// document.write(`Su codigo de descuento es: DESC${codigoDescuento}`)


// console.log(generadorNumero());
// console.log(generadorNumero());
// console.log(generadorNumero());
// console.log(generadorNumero());


// function calcularCompra(cantidadDeProductos, precio, impuestos) {

//     let subTotal = 2.5 * 4;
//     let totalImpuestos = subTotal * 0.0811121321321;
//     let precioTotal = totalImpuestos;

//     precioTotal = Math.round(precioTotal *100)/100

//     return precioTotal;
// }

// console.log(calcularCompra())




// DOM - CAPTURAR ELEMENTO BY ID


// let div = document.getElementById("app");
// let parrafo = document.getElementById("parrafo1");

// console.log(div.innerHTML);
// console.log(parrafo.innerHTML);



// DOM - CAPTURAR ELEMENTO BYCLASSNAME

// let paises = document.getElementsByClassName("bebidasAlcoholicas1");

// // console.log(bebidasAlcoholicas1[1].innerHTML);

// for (let i of bebidasAlcoholicas1){
//     console.log(i.innerHTML)

// }

//INNER TEXT EJEMPLO DE MODIFICACION DE TEXTO EN JS

let div = document.getElementById("comentario");

console.log(div.innerText);

div.innerText = "Bebidas Alcoholicas";

console.log(div.innerText);

div.innerText = "Bebidas sin alcohol";
console.log(div.innerText);


console.log(div.innerHTML);

// EJEMPLO AGREGAR ETIQUETAS DE HTML DESDE EL JS CON innetHTML

// let contenedor = document.getElementById("divi");

// contenedor.innerHTML = "<h1>Agregamos un H1 ACA !!!</h1>"


// MENSAJE DE BIENVENIDA CON INNER.TEXT

// let mensajeDeBienvenida = document.getElementById("mensaje");

// function mensajito() {
//     let horaActual = new Date().getHours();
// console.log(horaActual)

//     let mensaje;

//     if (horaActual < 12) {
//         mensaje = "Hola, esto es antes del mediodia"
//     }
//     else if (horaActual < 18) {
//         mensaje = "Hola, estas en la tarde, queres un coffee ?"
//     }
//     else {
//         mensaje = "Hola, ya es de noche";

//     }

//     mensajeDeBienvenida.innerText = mensaje;
// }


// mensajito();



// CREACION DE ELEMENTOS EN JS 

// let parrafo = document.createElement("p");
// parrafo.innerHTML = "<h2>Elija su bebida</h2>";

// document.body.append(parrafo);



//EVENTOS 

let botonMenos = document.querySelector("#botonMenos-eventlistener");

function boton(){
    botonMenos.style.cssText =
    "background-color: blue;";

    alert ("Hola");
}

botonMenos.addEventListener("click", boton);

let botonMas = document.querySelector("#botonMas-eventlistener");

function boton2(){
    botonMas.style.cssText =
    "background-color: red;";

    alert ("Gracias por elegirnos");
}

botonMas.addEventListener("click", boton2);




// SET Y GET ITEMS CON STORAGE

let nombreDeUsuario = "francisco";
let contraseña = "vazquez";


localStorage.setItem("SaludoCliente", `Buenas tardes ${nombreDeUsuario}`);


let mensajeDeSaludo = localStorage.getItem("SaludoCliente");



if (nombreDeUsuario == "francisco" && contraseña == "vazquez"){
    alert(mensajeDeSaludo);
}

else {
    alert("nombre de usuario incorrecto")
};




// JSON STRINGIFY

let bebida1 = { id: 1, producto: "Coca Cola"};
let enJson = JSON.stringify(bebida1);

// console.log(enJson);
// console.log(typeof bebida1);
// console.log(typeof enJson);

localStorage.setItem("bebida1", enJson);




