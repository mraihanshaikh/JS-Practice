let operator = '/';
let num1 = 10;
let num2 = 5;
let result;

if (operator === '+') {
    result = num1 + num2;
} else if (operator === '-') {
    result = num1 - num2;
}else if (operator === '*') {
    result = num1 * num2;
}else if (operator === '/') {
    result = num1 / num2;
}else{
    console.log("invalid operator");  
}
console.log(result);
