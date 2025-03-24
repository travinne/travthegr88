const cats =['Milo','Otis','Garfield']
let newCats ={...cats}


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
  {return cats.concat(name) }

function removeLastCat()
  {return cats.splice[-1]}

 
 
 console.log(cats)
 
 
 

 
 
 
console.log(cats);
  
