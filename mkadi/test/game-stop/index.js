let base_url =` http://localhost:3000/games`

document .addEventListener("DOMContentLoaded",() => {
    fetchGames();
    document.getElementById("gameForm").addEventListener('submit', addGame);
})

function fetchGames(){
    fetch(base_url)
    .then(res => res.json())
    .then(data =>{
        console.log("games are fetched:",data);
        displaGames(data);
   })
   .catch(err => console.error("error occured fetching game:",err));
}
function displaGames(games){
    let gameLibrary = document.getElementById('gameinventory')
    gameLibrary.innerHTML = "";

    games.forEach(game =>{
          let gameElement =`
        <div id="single-game" data-id="${game.id}">
            <img src="${game.image}" alt="${game.title}">
            <div>${game.description}</div>
            <div>${game.price}</div>
            <div>
            <button class="delete" onclick="deleteGame(${game.id})">Remove</button>
            <button class="buy" onclick="postGame(${game.id})">Download</button>
            </div>
        </div>   
        `
        gameLibrary.innerHTML +=gameElement
    })
}

function addGame(event){
    event.preventDefault();
    let gameTitle = document.getElementById('title').value;
    let gameImage = document.getElementById('image').value;
    let gameDescription = document.getElementById('description').value;
    let gamePrice = parseFloat(document.getElementById('price').value);

    let gameObject = {
        title: gameTitle,
        image: gameImage,
        description: gameDescription,
        price: gamePrice
    };

fetch(base_url,{
    method: "POST",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify(gameObject
    )
})
    .then(res => res.json())
    .then(data => {console.log("game added",data);
     fetchGames();
     document.getElementById("gameForm").reset()
})

.catch(err => console.log("error occured while adding game",err));
}

function deleteGame(id){

    if(!confirm("are you sure you wish to proceed with this request?")) return;

        fetch(`${base_url}/${id}`,{
        method: "DELETE"})
        .then(res => res.json())
        .then(() => {console.log(`you have successfuly deleted ${id}`)
        fetchGames();
       
})
        .catch(err => console.error("an error occured while deleting the game",err));
}

function postGame(id){
    alert(`downloading ${id}`)
}

        
        
