const cats =['Milo','Otis','Garfield']



 function destructivelyAppendCat(name) {
    cats.push(name);
 }

 function destructivelyPrependCat(name) {
    cats.unshift(name);
 }

 function destructivelyRemoveLastCat(Garfield){
    cats.pop(Garfield);
 }
 function destructivelyRemoveFirstCat(Milo){
    cats.shift(Milo);
 }
 function appendCat(name)
  {return cats.concat(name)
}
function prependCat(name)
  {return [name].concat(cats)}

function removeLastCat()
  {return cats.splice(0,2)}

 
 
 console.log(cats)
 
 
 

 
 
 
console.log(cats);
  
