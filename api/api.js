const getTodos = (router, callback) => {
  const request = new XMLHttpRequest(); // estamos haciendo una solicitud http

  request.addEventListener("readystatechange", () => {
    // control del evento de carga
    //console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      //estdo de carga del documento y validando el estado del paquete

      const data = JSON.parse(request.responseText); //pasoando la informacion json
      callback(undefined, data);
    } else if (request.readyState === 4) {
      // estamos viendo el estado
      callback("error cargando los datos", undefined);
    }
  });

  request.open("GET", router); //abre y lee la informacion de la siguiente direccion
  request.send(); // cierre de la peticion de paquete
};

console.log(1);
console.log(2);
getTodos("/json/data.json", (err, data) => {
  console.log("buscando datos");
  // console.log(data);                                 <-- por esto las promesas las inventaron para evitar los callback hell
  getTodos("/json/data2.json", (err, data) => {
    console.log(data);
    getTodos("/json/data3.json", (err, data) => {
      console.log(data);
    });
  });
});
console.log(3);
console.log(4);
