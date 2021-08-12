const liItems = document.querySelectorAll('.item');
console.log(`В списке ${[...liItems].length} операции`);
console.log('');
const liItemParagraphs = document.querySelectorAll('h2');
const li = document.querySelectorAll('li.item>ul');
//console.log([...li]);
const lis = [...li];
const liItemParagraph = [...liItemParagraphs];
for(let i = 0; i < lis.length; i += 1){
   console.log('Категория: ', liItemParagraph[i].textContent);
   console.log('Количество: ',[...lis[i].querySelectorAll('li')].length);
   console.log('');
}

//[...li].forEach( item => {console.log(item.querySelectorAll('li').length)});
//[...liItemParagraphs].forEach( paragraph => {
  //  console.log(`Категория: ${paragraph.textContent}`);
    //lis.forEach( l => console.log([l.querySelectorAll('li').length]));
//});
