"use strict";
function sum(a, b, cb) {
  const theSum = a + b;
  cb(theSum);
}
const result = sum(2, 3, function (result) {
  console.log(result);
});
