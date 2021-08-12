const inputOne = document.getElementById('name-input');
const inputTwo = document.getElementById('name-output');
const fillOutputByInput = event =>{
    if(event.target.value === ''){
        inputTwo.textContent = 'Незнакомец';
    }
    else{
        inputTwo.textContent = event.target.value;
    }
}
inputOne.addEventListener('input', fillOutputByInput);