const inputEl = document.querySelector('input');

const inputHolderFocus = e =>{
    inputEl.textContent = e.target.value; 
}
const inputHolderBlur = e => {
    inputEl.classList.remove('invalid');
    inputEl.classList.remove('valid');
      if( e.target.value.length >= Number(e.target.getAttribute('data-length'))){
        e.target.classList.add('invalid');
      }
      else{
          e.target.classList.add('valid');
      }
 }

inputEl.addEventListener('focus', inputHolderFocus);
inputEl.addEventListener('blur', inputHolderBlur);