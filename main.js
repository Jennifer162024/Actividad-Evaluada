// EJERCICIO 1

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//Ejercicio 1.2 Imprimir los números pares 
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// Ejercicio 1.3  Crear un triángulo con asteriscos usando bucles anidados
let filas = 5;
for (let i = 1; i <= filas; i++) {
    let linea = '';
    for (let j = 1; j <= i; j++) {
        linea += '*';
    }
    console.log(linea);
}

// EJERCICIO 2 
//calcular suma 
let array = [3, 7, 2, 9, 5];
let suma = 0;
for (let numero of array) {
    suma += numero;
}
console.log(suma);
// Encuentrar el número mayor
let array1 = [12, 45, 6, 89, 23];
let mayor = array[0];
for (let numero of array1) {
    if (numero > mayor) {
        mayor = numero;
    }
}
console.log(mayor);
//Filtrar los números menores a 10
let array2 = [15, 3, 8, 12, 1];
let menoresA10 = array2.filter(numero => numero < 10);
console.log(menoresA10);  

//EJERCICIO 3 ARROW FUCTIONS

//Convierte esta función a arrow function
const sumar = (a, b) => a + b;

//Crear una arrow function que reciba un número y devuelva su cuadrado
const cuadrado = (numero) => numero * numero;

//Usa una arrow function con map() para duplicar los valores del array [2, 4, 6]
const numeros = [2, 4, 6];
const duplicados = numeros.map(num => num * 2);
console.log(duplicados);

//
// EJERCICIO 4
//Crear JavaScript que represente un libro  (con título, autor y año) y conviértelo a JSON
const libro = {
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    año: 1943
  };
  
  const libroJSON = JSON.stringify(libro);
  console.log(libroJSON);

//Conviértelo a objeto y muestra la edad
const json = '{"nombre": "Lucas", "edad": 29, "ciudad": "San Salvador"}';
const objeto = JSON.parse(json);
console.log(objeto.edad); 

//Parsea el JSON y  y lista los productos
const jsonProductos = '[{"id": 1, "producto": "Mesa"}, {"id": 2, "producto": "Silla"}]';
const productos = JSON.parse(jsonProductos);
productos.forEach(producto => console.log(producto.producto));

//EJERCICIO 5 Try Catch Finally
// Escribe una función que divida dos números y  Usa try...catch para manejar división por cero
function dividir(a, b) {
    try {
      if (b === 0) {
        throw new Error("No es posible dividir entre 0");
      }
      return a / b;
    } catch (error) {
      console.log(error.message); // Maneja el error
    }
  }
  
  console.log(dividir(10, 2)); 
  console.log(dividir(10, 0)); 
  
  // Crea un bloque donde intentes acceder a una variable no definida y captura el error
  try {
    console.log(variableNoDefinida);
  } catch (error) {
    console.log("Error:", error.message);
  }

  //Usa try...catch...finally para asegurar que un mensaje se imprima siempre, haya error o no
  function prueba() {
    try {
    
      console.log("Procesando código");
      throw new Error("Algo salió mal");
    } catch (error) {
      console.log("Se encontro el error:", error.message);
    } finally {
      console.log("Este mensaje  se imprimirá");
    }
  }
  
  prueba();
  
  //Crea una función esperarSegundos que  use setTimeout con async/await

  function esperarSegundos(segundos) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`Han pasado ${segundos} segundos`);
      }, segundos * 1000);
    });
  }
  
  async function ejecutar() {
    console.log("Esperando...");
    const mensaje = await esperarSegundos(4);
    console.log(mensaje); 
  }
  
  ejecutar();

  // Usa fetch() para obtener datos de la API https://jsonplaceholder.typicode.com/users y muestra los nombres

  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    data.forEach(user => {
      console.log(user.name); 
    });
  })
  .catch(error => console.log('Error:', error));

  //Combina async/await con fetch para obtener y mostrar datos de una API pública

  async function obtenerUsuarios() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const data = await response.json();
      data.forEach(user => {
        console.log(user.name); 
      });
    } catch (error) {
      console.log('Error:', error.message);
    }
  }
  
  obtenerUsuarios();
  

  
  
  





  


