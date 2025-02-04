const head = document.getElementById('intro');
head.innerHTML = "say hello";

const name = document.getElementsByClassName('self');
console.log(name)
name[1].innerHTML = 'u can call me fizza';

const specific = document.querySelector('.self');
console.log(specific)
specific[3].innerHTML = 'change it';