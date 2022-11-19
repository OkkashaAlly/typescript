const add = (a: number, b: number) => a + b;

const result = add(5, 19);

const myFunction = (a: number, b: number = 4, c?: string): void => {
  console.log(a - b);
};

myFunction(10);
