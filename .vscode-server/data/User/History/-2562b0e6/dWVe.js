const shoppinglist = ['Managu', 'Mrenda', 'Matumbo']

function createElement(){
    document.createElement(li);
}
 
function addText(element, text){
    return document,createElement(element)

}

function appendChild(parentElement , childElement){
    
}

function selector(selector){

}

function listen(element, event, callback){
    return element. addEventListener(event, )
}

document.addEventListener('DOMcontentloaded', displayitems);

const ol = document.querySelector('#ol');

function displayitems(){
shoppinglist.array.forEach(item => {
    const li = document.createElement('li');
    addText (li ,item)
ol.appendChild(li);
});
}