//console.log('we are here')
body = document.body
let h1 = document.getElementById ('heading')
//console.log(h1)
h1.innerText = 'Introduction to DOM and Events in js'
h1.style.color = 'red'

let course_list = ['variable','functions','arrays','scope']
let ul = document.getElementById('course-content')

course_list.forEach((course)=>{
    let li = `<li>${course}</li>`
    ul.innerHTML += li
})

let div = document.createElement(div)
div.setAttribute('id','content')
div.style.height ='150px'
div.style.width ='150px'
div.style.backgroundcolor = 'blue'
Body.appendChild(div)

