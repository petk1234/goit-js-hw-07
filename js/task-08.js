const inputEl = document.querySelector('input');
const divEl = document.querySelector('#boxes');
const mainFunction = e =>{
    const amount = e.target.value;
    
    const createButton = document.querySelector('button[data-action="render"]');
    const destroyButton = document.querySelector('button[data-action="destroy"]');
    const createBoxes = e =>{
        const divMassive = [];
        for(let i = 0; i < amount; i += 1){
                const divElofBoxes = document.createElement('div');
                    divElofBoxes.style.width = `${30 + 10 * i}px`;
                    divElofBoxes.style.height = `${30 + 10 * i}px`;
                    divElofBoxes.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
                    divEl.appendChild(divElofBoxes);
                    divMassive.push(divElofBoxes);
        }
        const destroyBoxes = e =>{
            for(let i = 0; i < amount; i += 1){
                divEl.removeChild(divMassive[i]);
            }
        }
        destroyButton.addEventListener('click', destroyBoxes);
    }
    createButton.addEventListener('click', createBoxes);

}
inputEl.addEventListener('input', mainFunction);
