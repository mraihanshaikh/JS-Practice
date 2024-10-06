// Factorial (Without a Function)

let num = 5;
let Factorial = 1;

for (let i = 1; i <= num; i++) {
    Factorial = Factorial * i;
}
console.log(Factorial);

// Recursion

let recusion = 1;

for (i = num; i >= 1; i--) {
    recusion = recusion * i;
}
console.log(recusion);
