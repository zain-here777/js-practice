// const head = document.getElementById('intro');
// head.innerHTML = "say hello";

// const name = document.getElementsByClassName('self');
// console.log(name)
// name[1].innerHTML = 'u can call me fizza';

// const specific = document.querySelector('.self');
// console.log(specific)
// specific.innerHTML = 'change it';


// on click event

// let votes = 0;
//         const vote = (action) => {
//             if (action === "up") {
//                 votes++;
//             } else if (action === "down") {
//                 votes--;
//             }
//             document.getElementById("voteCount").innerHTML = "Votes: " + votes;
//         }


// ondbl click

// const changeclr = () => {
//     const btn = document.getElementById('btn');
//     if(
//         btn.style.color === 'red'
//     ){
//         btn.style.color = 'blue';
//     }
//     else{
//         btn.style.color = 'red';
//     }
// }
// document.getElementById('btn').addEventListener("click" , function (){
//     const btn = document.getElementById('btn');
//     if(btn.style.color === 'red'){
//         btn.style.color = 'blue';
//     }
//     else{
//         btn.style.color = 'red';
//     }
// })

// on key press

// const keypress = () => {
//     const box = document.getElementById('box');
//     if (
//         box.style.backgroundcolor === 'yellow'
//     )
//     {
//         box.style.backgroundcolor = 'green';
//     }
//     else{
//         box.style.backgroundcolor = 'yellow';
//     }
// }

// form events

// document.getElementById('form') .addEventListener("submit" , function(){
//     alert('form submitted');
// });
// document.getElementById('name') .addEventListener("input" , function(){
//     console.log('input');
// });
// document.getElementById('name') .addEventListener("change" , function(){
//     const self = document.getElementById('name');
//     self.style.backgroundColor = 'lightblue';
// });
// document.getElementById('name') .addEventListener("focus" , function(){
//     const self = document.getElementById('name');
//     self.style.backgroundColor = 'lightgray';
// });
// document.getElementById('name') .addEventListener("blur" , function(){
//     const self = document.getElementById('name');
//     self.style.backgroundColor = 'white';
// });
// document.getElementById('mail') .addEventListener("input" , function(){
//     console.log('input');
// });
// document.getElementById('mail') .addEventListener("change" , function(){
//     const self = document.getElementById('mail');
//     self.style.backgroundColor = 'lightblue';
// });
// document.getElementById('mail') .addEventListener("focus" , function(){
//     const self = document.getElementById('mail');
//     self.style.backgroundColor = 'lightgray';
// });
// document.getElementById('mail') .addEventListener("blur" , function(){
//     const self = document.getElementById('mail');
//     self.style.backgroundColor = 'white';
// });
// document.getElementById('password') .addEventListener("input" , function(){
//     console.log('input');
// });
// document.getElementById('password') .addEventListener("change" , function(){
//     const self = document.getElementById('password');
//     self.style.backgroundColor = 'lightblue';
// });
// document.getElementById('password') .addEventListener("focus" , function(){
//     const pass = document.getElementById('password');
//     pass.style.backgroundColor = 'lightgray';
// });
// document.getElementById('password') .addEventListener("blur" , function(){
//     const pass = document.getElementById('password');
//     pass.style.backgroundColor = 'white';
// });


// //objects

// function merge(obj1 , obj2){
//     return Object.assign({} , obj1 , obj2);
// }
// const obj1 = {
//     name : 'fizza',
//     age : 21,
// };
// const obj2 = {
//     color : 'blue',
//     height : 5.6,
// };
// console.log(merge(obj1 , obj2));


// const book = {
//     title : 'jannat kay pattay',
//     author : 'Nemrah Ahmed',
//     year : 2012,
// };
// Object.values(book).forEach(value => {
//     console.log(value);
// });


// //events

// // resize

// window.addEventListener("resize" , function(){
// if (window.innerWidth < 768) {
//     console.log ('this is for tablets');
// } else{
//     console.log ('this is for laptops');
// }
// });

// window.addEventListener("resize", function() {
//     if (window.innerWidth < 786) {
//         document.body.style.background = "lightblue"; 
//     } else {
//         document.body.style.background = "lightgray"; 
//     }
// });


// // on load

// window.onload = function() {
//     document.getElementById("loader").style.display = "none";
//     document.getElementById("content").style.display = "block";
// };

//calculator

function appendValue(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (e) {
        alert('Invalid Expression');
    }
}


