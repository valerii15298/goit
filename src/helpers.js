const sqrt = Math.sqrt;

export const square = x => x * x;

export const diag = (x, y) => sqrt(square(x) + square(y));

export default function myFunc() {
    console.log("I am default exported function");
}