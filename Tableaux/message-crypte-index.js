const mysteriousString = `iu@zfiz)!uzqzf!snoi??alutargnocze&gfuzyafzygfzmgfu%f`;
console.log('step 0 : ', mysteriousString);

// Step 1: Split the string into an array
const step1 = mysteriousString.split('');
console.log('step 1 : ', step1);

// Step 2: Slice the array to get elements from index 15 to 32
const step2 = step1.slice(15, 32);
console.log('step 2 : ', step2);

// Step 3: Replace 2 elements from index 5 with 't'
const step3 = step2.slice(); // make a copy to avoid modifying the original
step3.splice(5, 2, 't');
console.log('step 3 : ', step3);

// Step 4: Reverse the array
const step4 = step3.reverse();
console.log('step 4 : ', step4);

// Step 5: Join the array back into a string
const step5 = step4.join('');
console.log('step 5 : ', step5);
