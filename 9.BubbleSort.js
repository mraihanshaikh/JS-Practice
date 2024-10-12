let a = [1002, 0.2, 89, -0.090, 0.987, -0.3, -8]
let temp;
console.log("Before Sorting " + a);

console.log("After Sorting");
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
        if (a[j] > a[j + 1]) {
            temp = a[j];
            a[j] = a[j + 1];
            a[j + 1] = temp;
        }
    }
}
console.log(`${a}`);
