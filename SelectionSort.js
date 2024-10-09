let a = [22, 15, 50, 9, 1]
let temp;

for (i = 0; i < a.length; i++) {
    let index = i;
    for (j = i + 1; j < a.length; j++) {
        if (a[j] < a[index]) {
            index = j;
        }  
    }
    temp = a[i];
    a[i] = a[index];
    a[index] = temp;

}
console.log(`${a}`);
