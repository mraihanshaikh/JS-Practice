// Sum of Even Numbers

let num = 10;
let even = 0;
for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
        even = even + i;
    }    
}
console.log(even);