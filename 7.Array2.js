//  a program that finds the maximum number in an array

let n = [8, 2, 25, 22, 18];
let max = n[0];

for (let i = 1; i < n.length; i++) {

    if (n[i] > max) {
        max = n[i];
    }

}
console.log(max);
