// 1. Create click handlers for each button (#zero, #add5, #add10, #sub1)
document.querySelector('#zero').onclick = zero;
document.querySelector('#add5').onclick = addFive;
document.querySelector('#add10').onclick = addTen;
document.querySelector('#sub1').onclick = minusOne;

// document.getElementById('button').onclick = function() {
// document.getElementById(id='result').innerHTML = 0;

// parseInt(#zer0)
// parseInt(#add5)

// console.log(#zero);
// console.log(#add5);
// Hint: use document.querySelector and .onclick for each button
// 2. Write functions for each click handler (ex: addFive, addTen, minusOne)
let total = 0;

function zero() {
    total = 0;
    document.querySelector('#result').innerHTML = total;
}

function addFive() {
    total = total + 5;
    // total +=5; another way to say that..
    document.querySelector('#result').innerHTML = total;
    
    console.log(total)
}
function addTen() {
    total = total + 10;
    document.querySelector('#result').innerHTML = total;
}
function minusOne() {
    total = total - 1;
    document.querySelector('#result').innerHTML = total;
}
// 3. Each function will need to: 
// A) Use the .innerHTML property to get the value inside of #result (store as a variable)
// B) Manipulate the value using the parseInt() method
// C) Perform the correct arithmetic
// D) Use the .innerHTML property to write the new value to #result

// E) WE'll DO LATER - Create an input element and add that value to the total#a