// const head = document.getElementById('intro');
// head.innerHTML = "say hello";

// const name = document.getElementsByClassName('self');
// console.log(name)
// name[1].innerHTML = 'u can call me fizza';

// const specific = document.querySelector('.self');
// console.log(specific)
// specific.innerHTML = 'change it';


// on click event

let votes = 0;
        const vote = (action) => {
            if (action === "up") {
                votes++;
            } else if (action === "down") {
                votes--;
            }
            document.getElementById("voteCount").innerHTML = "Votes: " + votes;
        }


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
document.getElementById('btn').addEventListener("click" , function (){
    const btn = document.getElementById('btn');
    if(btn.style.color === 'red'){
        btn.style.color = 'blue';
    }
    else{
        btn.style.color = 'red';
    }
})

// on key press

const keypress = () => {
    const box = document.getElementById('box');
    if (
        box.style.backgroundcolor === 'yellow'
    )
    {
        box.style.backgroundcolor = 'green';
    }
    else{
        box.style.backgroundcolor = 'yellow';
    }
}

