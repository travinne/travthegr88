document.addEventListener('DOMContentLoaded',main)

let h1 = document.getElementById('title')
h1.innerText = 'RAMEN  RATER';

const ramens = [
     { id: 1,
    name: 'Shoyu Ramen',
    restaurant: "Ichiran",
    image:'images/michele-blackwell-rAyCBQTH7ws-unsplash.jpg',
    rating: 5,
    comment: "Delicious!" 
},

{  
    id: 2,
    name: 'miso Ramen',
    restaurant: "menya",
    image:'images/Easy Japanese Ramen Recipe.jpeg', 
    rating: 4,
    comment: "very favourable" 
},

  {  
    id: 3,
    name: 'bon vivant',
    restaurant: "ramen-yu",
    image:'images/bon-vivant-qom5MPOER-I-unsplash.jpg',
    rating: 3,
    comment: "creamy and rich"
 },

 {  
    id: 4,
    name: 'tonkotsu Ramen',
    restaurant: "ramen-ya",
    image:'images/Veggie Ramen Soup Recipe - Peas and Crayons Blog.jpeg',
    rating: 8,
    comment: "rich in flavor"
 },

 {  
    id: 5,
    name: 'tonkotsu Ramen',
    restaurant: "ramen-ya",
    image:'images/diego-lozano-mE6kjov4rTg-unsplash.jpg',
    rating: 7,
    comment: "spicy and sweet!"
 },
];

let currentRamen = null;

function displayRamens(){
    const ramenMenu = document.getElementById('menu');
    ramenMenu.innerHTML = ""
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener('click',() => handleClick(ramen));
        ramenMenu.appendChild(img)
        });
}

function handleClick(ramen){
    document.getElementById('image-ramen').src = ramen.image;
    document.getElementById('name-ramen').textContent = ramen.name;
    document.getElementById('restaurant-ramen').textContent = ramen.restaurant;
    document.getElementById('rating-ramen').textContent = `rating: ${ramen.rating}`;
    document.getElementById('comment-ramen').textContent = `comment: ${ramen.comment}`;
}
  
function newRamen(event){
    event.preventdefault();
    const form = document.getElementById('new-entry');
    const newRamen = {
        
    }
}


function newRamen(){
if (newRamen.imag && newRamen.name && newRamen.restaurant){
    ramens.push(newRamen);
    displayRamens()
    form.reset()}  }

   


function main(){
displayRamens()
addEventListener()
newRamen()

}