"use strict";
const add = (a, b) => a + b;
const result = add(5, 19);
const myFunction = (a, b = 4, c) => {
    console.log(a - b);
};
myFunction(10);
