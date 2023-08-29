const getTodos = (callback) =>{
    const request = new XMLHttpRequest(); // estamos haciendo una solicitud http 

    request.addEventListener("readystatechange", () => { // control del evento de carga
      //console.log(request, request.readyState);
      if (request.readyState === 4 && request.status === 200) { //estdo de carga del documento y validando el estado del paquete
        callback(undefined, request.responseText) // respode con un texto
      } else if(request.readyState === 4){ // estamos viendo el estado
         callback("error cargando los datos",undefined)
      }
    
    });
    
    request.open("GET",'https://jsonplaceholder.typicode.com/todos/1'); //abre y lee la informacion de la siguiente direccion
    request.send(); // cierre de la peticion de paquete    
}

console.log(1);
console.log(2);
getTodos((err,data)=>{
    console.log('buscando datos')
    if(err){ // haciendo una condicion si tenemos un error
        console.error('tenemos un erro')
    } else{
        console.log(data) // si no tenemos un error pasa los datos
    }
})
console.log(3);
console.log(4);
