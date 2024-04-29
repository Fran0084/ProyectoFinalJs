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


// Bebidas sin alcohol


class BebidasNoAlcoholicas {
    constructor(marca, tamano, sabor, precio) {
        this.marca = marca;
        this.tamano = tamano;
        this.sabor = sabor;
        this.precio = Number(precio);
    }
}


let cocaCola = new BebidasNoAlcoholicas("Coca Cola", 2.25, "Zero", 2500);
let sprite = new BebidasNoAlcoholicas("Sprite", 2, "original", 1890);
let fanta = new BebidasNoAlcoholicas("fanta", 2.50, "naranja", 2750);
let pasoDeLosToros0 = new BebidasNoAlcoholicas("Paso de los Toros", 2, "Pomelo", 1890);
let aguaMineralSinGas = new BebidasNoAlcoholicas("Villa del Sur", 1.75, "Mineral sin gas", 1500);
let aguaMineralConGas = new BebidasNoAlcoholicas("Villa del sur", 1.75, "Mineral con Gas", 1650);
let energizanteSpeed= new BebidasNoAlcoholicas("Speed", 450, "original", 1500);
let monster= new BebidasNoAlcoholicas("Monster", 450, "naranja", 1850);




// Bebidas con alcohol 

class BebidasAlcoholicas {
    constructor(marca, tamaño, precio) {
        this.marca = marca;
        this.tamaño = tamaño;
        this.precio = precio;
    }
}

let cervezas = new BebidasAlcoholicas(["heineken", "stella", "miller"], [330, 720, 900], [1200, 1600, 2000]);
let fernet = new BebidasAlcoholicas(["Branca", "buhero"], [750, 1000], [8000, 9000, 12000]);
let vinos = new BebidasAlcoholicas(["Norton", "Lopez", "Termidor"], 750, [4000, 4500, 5000]);


document.write(cervezas.marca[1] + "<br>");
document.write(cervezas.tamaño[2] + "<br>");
document.write(calcularIva(cervezas.precio[0]) + "<br>");



function calcularIva(num1) {
    let resultadoCalculoIva = num1 * 1.21

    return resultadoCalculoIva;

}


// document.write(`${cocaCola.marca}: ${calcularIva(cocaCola.precio)}`);



