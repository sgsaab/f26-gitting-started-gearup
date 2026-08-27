// Build this project with npm run build, then run it with 
// node dist/sample.js

export function add2(a: number, b: number): number {
    return a+b;
}

export function sub2(a: number, b: number): number {
    // TODO: implement me with the 32 agent
    return 0;
}

let a = 0;
let b = 32;
let added = add2(a, b);
let subtracted = sub2(a, b);

console.log('a:', a);
console.log('b:', b);
console.log('a + b:', added);
console.log('a - b:', subtracted);
