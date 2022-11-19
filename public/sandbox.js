"use strict";
const form = document.querySelector("form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.table(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
