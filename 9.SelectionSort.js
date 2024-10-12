let a = [22, 15, 50, 9, 1]


for (let i = 0; i < a.length; i++) {
    let minindex = i;
    for (let j = i + 1; j < a.length; j++) {
        if (a[j] < a[minindex]) {
            minindex = j;
        }
    }
    let temp = a[i];
    a[i] = a[minindex];
    a[minindex] = temp;   
}
console.log(`${a}`);
