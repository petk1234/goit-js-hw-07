const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const myFunction = ingredients =>{
  const createLiforEl = ingredients.map( ingredient =>{
    const liEl = document.createElement('li');
    liEl.textContent = ingredient;
    return liEl;
  });
  const ulIngredients = document.querySelector('ul');
  for(let i = 0; i < createLiforEl.length; i += 1){
    ulIngredients.appendChild(createLiforEl[i]);
  }
}
myFunction(ingredients);