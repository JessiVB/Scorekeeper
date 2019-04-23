// 1. Create click handlers for each button (#zero, #add5, #add10, #sub1)
document.querySelector('#zero').onclick = zero;
document.querySelector('#add5').onclick = addFive;
document.querySelector('#add10').onclick = addTen;
document.querySelector('#sub1').onclick = minusOne;

// document.getElementById('button').onclick = function() {
// document.getElementById(id='result').innerHTML = 0;

// parseInt(#zer0)
// parseInt(#add5)


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
