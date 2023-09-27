// async function promesa(name) {
//   //await va a tomar tiempo en ejecutar
//   try {
//     const result = await name;
//     if (result === undefined) {
//       return "faltan los datos";
//     }
//     return result;
//   } catch (err) {
//     if (err === undefined)
//       console.log(
//         "pasa los datos por que esta vacio, el algunmento de la funcion"
//       );
//   }
// }

// promesa(undefined)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Para los metos que son asincronos hay que manejar por medio de try catch

console.time("inicio") 
function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName;
}

const kelvin = new Person("kelvin", "abache");

Person.prototype.help = () => {
  return "necesita ayuda";
};

async function datas() {
 const dataObject = await kelvin;
 const method = await kelvin.help();
  return `${dataObject.name} ${dataObject.lastName} frase:${method}`;
}

datas()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
  console.timeEnd('inicio')