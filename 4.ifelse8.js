// Recusrion program

let num = 5;
function recusion(num) {
    if (num == 0 ) {
        return 1;
    }else {
        return num * recusion(num-1);
    }
}
console.log(recusion(num));
