
let i, j, temp;
let a = [55, 35, 15, 5, 20];

for (i = 0; i < 5; i++) {
    console.log(a[i]);
}

// a.sort(function(a,b){return a-b});
// console.log(a);

for (i = 0; i < 5; i++) {
for (j = i+1; j < 5; j++) {
    if (a[i] > a[j]) {
        temp = a[i];
        a[i]=a[j];
        a[j]=temp
    }
}
}

for (i = 0; i < 5; i++) {
    console.log(a[i]);
}