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
];

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
    event.preventDefault();

    const form = document.getElementById('new-ramen');
    const newRamen = {
        id: ramens.length + 7,
        image: document.getElementById('new-image').value,
        name: document.getElementById('name-name').value,
        restaurant: document.getElementById('new-restaurant').value,
        rating: document.getElementById('new-rating').value,
        comment: document.getElementById('new-comment').value,
    }
if (newRamen.image && newRamen.name && newRamen.restaurant){
    ramens.push(newRamen);
    displayRamens()
    form.reset()}  }

function addEventListener (){
    const form = document.getElementById('new-ramen').rest();
    form.addEventListener('submit', newRamen)

    }
    
function main(){
    displayRamens()
    addEventListener()
 }