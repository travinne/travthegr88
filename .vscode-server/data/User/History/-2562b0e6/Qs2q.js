const shoppinglist = ['Managu', 'Mrenda', 'Matumbo']

document.addEventListener('DOMcontentloaded', displayitems)

const ol = document.querySelector('#ol')

function displayitems(){
shoppinglist.map()
const li = document.createElement('li')
li.innerText = item; 
ol.appendChild(li);
}