

//numbers.indexOf(5)

//const cards = ['queen of hearts', 'jack of clubs', 'ten of diamonds', 'ace of spades'];
//console.log(cards.indexOf('queen of hearts',2));
let numbers =[1,2,3,4,5,6,7,8,9,10]
//forEach 
numbers.forEach(function(k){
   console.log(k**3)
})

//find
let find = numbers.find((number) => number >6)
console.log(find)

//filter
let filter_numbers = numbers.filter((number) => number %2==0)
console.log(filter_numbers)

//map
let_new_numbers_array = numbers.map((number) => number **2)
console.log(let_new_numbers_array)


//reduce
//let result = numbers.reduce((acc,num)=>acc+num)
//console.log(result)

