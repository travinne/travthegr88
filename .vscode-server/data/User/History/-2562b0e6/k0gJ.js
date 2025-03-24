const shoppinglist = ['Managu', 'Mrenda', 'Matumbo']

function createElement(){
    document.createElement(li);
}
 
function addText(){
    
}

document.addEventListener('DOMcontentloaded', displayitems);

const ol = document.querySelector('#ol');

function displayitems(){
shoppinglist.array.forEach(item => {
    const li = document.createElement('li');
    li.innerText = item; 
ol.appendChild(li);
});
}