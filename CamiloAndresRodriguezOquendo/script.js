//Ejercicio 1 taller metodos no mutables.
let puntos = [10, 20, 30, 40]
let puntosDobles = puntos.map(valor => valor*2)

console.log(puntos);
console.log(puntosDobles);

//Ejercicio 2 taller metodos no mutables.
let usuarios = [{id: 1, nombre: "Ana"}, {id: 2, nombre: "Luis"}, {id: 3, nombre: "Carlos"}];
let nombres = usuarios.map((usuario) => usuario.nombre)

console.log(nombres);

