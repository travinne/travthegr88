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

function attribute(element, attribute, content){
    
}

document.addEventListener('DOMcontentloaded', displayitems);

const ol = document.querySelector('#ol');

function displayitems(){
shoppinglist.array.forEach(item => {
    const li = document.createElement('li');
    li.setAttribute('class')
    addText (li ,item)
ol.appendChild(li);
});
}