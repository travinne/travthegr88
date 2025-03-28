let base_url =` http://localhost:3000/games`
function myGames(games){
    let gameLibrary = document.getElementById('gameinventory')
    gameLibrary.innerHTML = ""
    games.forEach(game =>{  let html = `
        <div id="single-game" data-id="${game.id}">
            <img src="${game.image}" alt="${game.title}">
            <div>${game.description}</div>
            <div>${game.price}</div>
            <div>
            <button class="delete" onclick="deleteGame(${game.id})">remove<button>
            <button class="buy" onclick="postgame(${game.id})">download<button>
            </div>
        </div>   
        `
        gameLibrary.innerHTML += html
    })
}

fetch(base_url)
.then(res =>res.json())
.then(data => {
     console.log(data);
     myGames(data);})
.catch(err => console.log( "error occured in fetching game",err))

document.getElementById('gameForm').addEventListener('submit',function(event){
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
     fetch(base_url)
    .then(res => res.json())
    .then(updatedData => displayGames(updatedData));
})
    .catch(err => console.log("error occured while adding game",err));
})

function deleteGame(id){
        fetch(`${base_url}/${id}`,{
        method: "DELETE"})
        .then(res => res.json())
        .then(() => {console.log(`you have successfuly deleted ${id}`)
        fetch(base_url)
        .then(res => res.json())
        .then(updatedData => myGames(updatedData));
})
        .catch(err => console.error("an error occured while deleting the game",err));
}


        
        
