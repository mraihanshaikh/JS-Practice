// Grade checker based on marks

let marks = 75;

if (marks > 80) {
    console.log("Student grade is A");
} else if (marks > 60 && marks <= 80) {
    console.log("Student grade is B");
} else if (marks > 45 && marks <= 60) {
    console.log("Stuent grade is C");
} else if (marks > 30 && marks <= 45) {
    console.log("Student grade is D");
} else {
    console.log("Student is FAIL");
}