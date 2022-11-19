type StrONum = string | number;
type UserObj = { name: string; uid: StrONum };

// let foo: string | number;
let foo: StrONum = 10;

// const greet = (user: { name: string; uid: number | string }) => {};
const greet = (user: UserObj) => {};
greet({ name: "Okkasha", uid: "" });

