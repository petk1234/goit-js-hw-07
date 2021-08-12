let counterValue = 0;
const spanEl = document.querySelector('span');
const increment = () =>{
    counterValue += 1;
    spanEl.textContent = counterValue;
    console.log(counterValue);
}

const decrement = () =>{
     counterValue = Number(counterValue) - 1;
     console.log(counterValue);
     spanEl.textContent = counterValue;
}
const buttonEl = document.querySelectorAll('button');
if(buttonEl[0].getAttribute('data-action') === 'decrement'){
    buttonEl[0].addEventListener('click', decrement);
    buttonEl[1].addEventListener('click', increment);
    //spanEl.textContent = counterValue;
}
else{
    buttonEl[0].addEventListener('click', increment);
    buttonEl[1].addEventListener('click', decrement);
   // spanEl.textContent = counterValue;
}
//console.log(buttonEl.getAttribute('data-action') === 'decrement');
// if(buttonEl.data-action === ){
//     buttonEl.addEventListener('click', decrement);
// }
//const decrementButton = document.querySelector('button[data-active="decrement"]');
//decrementButton.addEventListener('click', decrement);