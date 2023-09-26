"use strict";
// function return a promise

function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(54);

      //reject(new Error("error me cago en to"));
    }, ms);
  });
}

// const promise = sleep(3000);

// console.log(promise);

// promise
//   .then((resultado) => {
//     console.log("Han pasado 3 segundos", resultado);
//     return sleep(2000);
//   })
//   .then(() => {
//     console.log("Han pasado otros 2 segundos ");
//   })
//   .catch((err) => {
//     console.log("Hubo un error, ", err.message);
//   });

Promise.all([sleep(3000), sleep(2000), sleep(1000)]).then((resultados) => {
  console.log(resultados);
});
