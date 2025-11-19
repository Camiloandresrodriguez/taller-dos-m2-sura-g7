//Ejercicio 1 taller metodos no mutables.
let puntos = [10, 20, 30, 40]
let puntosDobles = puntos.map(valor => valor*2)

console.log(puntos);
console.log(puntosDobles);

//Ejercicio 2 taller metodos no mutables.
let usuarios = [{id: 1, nombre: "Ana"}, {id: 2, nombre: "Luis"}, {id: 3, nombre: "Carlos"}];
let nombres = usuarios.map((usuario) => usuario.nombre)

console.log(nombres);

//Ejercicio 3 taller metodos no mutables.
let notas = [8, 5, 10, 3, 7];
let aprobadas = notas.filter((nota) => nota = nota >= 6)

console.log(aprobadas);

//Ejercicio 4 taller metodos no mutables.
let productos = [{nombre: "Camisa", stock: 10}, {nombre: "Zapatos", stock: 0}, {nombre: "Pantalón", stock: 5}];
let enStock = productos.filter((Stock) => Stock.stock > 0)

console.log(enStock);

//Ejercicio 5 taller metodos no mutables.
let ventas = [150, 300, 100, 50];
let totalVentas = ventas.reduce((acumulador ,resultado) => { return acumulador + resultado}, 0)

console.log(totalVentas);

//Ejercicio 6 taller metodos no mutables.
let grupos = [["Ana", "Luis"], ["Maria", "Juan"], ["Pedro"]];
let listaPlana = grupos.reduce((acumulador, resultado) => acumulador.concat(resultado))

console.log(listaPlana);

//Ejercicio 7 taller metodos no mutables.
let original = ["A", "B", "C"];
let clon = original.slice()
clon.push("D")

console.log(original);
console.log(clon);

//Ejercicio 8 taller metodos no mutables.
let competidores = ["Oro", "Plata", "Bronce", "Mención 1", "Mención 2"];
let podio = competidores.slice(0,3)

console.log(competidores);
console.log(podio);

//Ejercicio 9 taller metodos no mutables.
let equipoDev = ["Ana", "Juan"];
let equipoQA = ["Carlos", "Maria"];
let equipoCompleto = equipoDev.concat(equipoQA)

console.log(equipoCompleto);

//Ejercicio 10 taller metodos no mutables.
let carrito = ["Manzana"];
let nuevoCarrito = carrito.concat("pera")

console.log(carrito);
console.log(nuevoCarrito);

