// // getElementById //
//
// const fiza = document.getElementById('para');
//
// fiza.innerHTML = "Javascript is saying Hi to you!";
//
// // getElementByClassName //
//
// const classSelector = document.getElementsByClassName('para-2');
// console.log(classSelector)
// classSelector[1].innerHTML = 'This is class selector'
//
//
// // querySelector (will pick only the first matched class)  //
//
// const query = document.querySelector('.para-2');
// console.log(query)
//
// query.innerHTML = 'This is Query Selector';

function showHidePara() {
    const para = document.getElementById('para-show');

    if (para.style.display === 'none') {
        para.style.display = 'block';
    } else {
        para.style.display = 'none';
    }
}

const changeBtnText = () => {
    const clickBtn = document.getElementById('clickBtn');

    if (clickBtn.innerHTML === "Clicked"){
        clickBtn.innerHTML = "Click me";
    }else{
        clickBtn.innerHTML = "Clicked"
    }
}

function changeBoxColor() {
    const box = document.getElementById('colorBox');

    if (box.style.backgroundColor === 'lightgray') {
        box.style.backgroundColor = 'skyBlue';
        box.innerHTML = 'This is the Blue color Box';
    } else {
        box.style.backgroundColor = 'lightgray';
        box.innerHTML = 'This is the Gray color Box';
    }
}
