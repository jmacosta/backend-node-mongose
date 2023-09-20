"use strict";

function writePast2Seconds(texto, cb) {
  setTimeout(function () {
    console.log(texto);
    cb();
  }, 2000);
}

function serial(arr, fn, cb) {
  if (arr.length === 0) {
    cb();
    return;
  }

  fn("texto" + arr.shift(), function () {
    serial(arr, fn, cb);
  });
}

serial([1, 2, 3, 4, 5, "seis"], writePast2Seconds, function () {
  console.log("fin");
});
