let n =5;

// for(let i=1;i<=n;i++){
//     console.log("*");
//     console.log(i);
// }
let star = "*";
for(i=1;i<=n;i++){
    for(j=1;j<=i;j++){
        star += "* ";        
    }
    console.log("\n");
}   
console.log(star);
