// getElementById //

const fiza = document.getElementById('para');

fiza.innerHTML = "Javascript is saying Hi to you!";

// getElementByClassName //

const classSelector = document.getElementsByClassName('para-2');
console.log(classSelector)
classSelector[1].innerHTML = 'This is class selector'


// querySelector (will pick only the first matched class)  //

const query = document.querySelector('.para-2');
console.log(query)

query.innerHTML = 'This is Query Selector';

