const inputEl = document.querySelector('#font-size-control');
console.log(inputEl);
const changeSpan = e =>{
     const spanEl = document.querySelector('span');
     spanEl.style.fontSize = `${e.target.value}pt`;
}

inputEl.addEventListener('input', changeSpan);
