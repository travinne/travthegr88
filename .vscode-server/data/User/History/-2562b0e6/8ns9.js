const shoppinglist = ['Managu', 'Mrenda', 'Matumbo']

function createElement(){
    document.createElement(li);
}
 
function addText(element, text){
    return document,createElement(element)

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