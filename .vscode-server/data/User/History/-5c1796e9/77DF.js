console.log("hello world");
let fruits =["banana","apple","kiwi","mangoe","orange"];

 console.log(fruits.length) 

 console.log(fruits[4])

 // unshift
 fruits.unshift("watermelon")

 console.log(fruits)

 // push
 fruits.push("lemon")
 console.log(fruits)

 // shift
 fruits.shift("avacado")
 console.log(fruits)

 //pop
 fruits.pop("berry")
 console.log(fruits)

 //spread operater(...)
 let new_fruits =[...fruits,"pineapple","pear"]
 console.log(new_fruits)
 console.log(fruits)

 let new_fruit_arr=[...fruits,"avacado"]
 console.log(new_fruit_arr)

 // Objects
let person= {
    name:'john',
    gender:'male',
    age:34,
    isactive:true,
    friends: ["brian","juma","lisa","collins"]
}

console.log(person.age)
console.log(person.friends[3])
console.log(person.friends[2])

