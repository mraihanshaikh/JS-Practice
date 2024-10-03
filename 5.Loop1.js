let result="";
let num = 5;
for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
        result = result + j;
    }
    result = result + "\n";
}
console.log(result);
