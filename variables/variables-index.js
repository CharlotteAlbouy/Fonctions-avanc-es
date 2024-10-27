const a = 5;
const b = 5;
const c = 5;


if (a === b && b === c) {
    console.log("the three variables are the same");
} else if (a === b || a === c || b === c) {
    console.log("two of the variables are the same");
} else {
    console.log("all variables are different");
}
