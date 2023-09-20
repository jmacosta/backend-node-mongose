"use strict";

function writePast2Seconds(texto, cb) {
  setTimeout(function () {
    console.log(texto);
    cb();
  }, 2000);
}

function serial(n, fn, cb) {
  if (n === 0) {
    cb();
    return;
  }
  n = n - 1;
  fn("texto" + n, function () {
    serial(n, fn, cb);
  });
}

serial(6, writePast2Seconds, function () {
  console.log("fin");
});
