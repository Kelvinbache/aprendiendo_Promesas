const backerd = (router) => {
  return new Promise((resolve, reject) => {
    // creando una nueva promesa

    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data); //pasando el datos
      } else if (request.readyState === 4) {
        reject("tenemos un problema en los datos"); //pasando el error
      }
    });
    request.open("GET", router);
    request.send();
  });
};

backerd("/json/data.json") //pasando la direction ip
  .then((data) => {
    //esperando dato
    console.log(data);
   return backerd("/json/data2.json"); //podemos rectornar una nueva direcction pero esto seria una mala practica
  }).then(data =>{
    console.log(data)
    return backerd('/json/data3.json') //retornamos una nueva direccion para recorrer
  }).then(data =>{
    console.log(data)
  })
  .catch((err) => {
    //esperando el error
    console.error(err);
  });

// const cargando = () => {
//   return new Promise((resolve, reject) => {
//     //resolve("algun dato"); // practicamente las palabras de resolve y reject, son condiciones que dicen reciviendo algun dato y error en algun dato
//      reject("error en algun dato"); //retorna un error
//   });
// };

// cargando().then( //aqui estamos usando un metodo para retrnar un valor
//   (data) => {
//     console.log(data);
//   }).catch(err => { // aqui estamos usando un metodo para detectar, un error
//     console.error(err)
//   })

//   // las promesas son mas faciles de manejar
