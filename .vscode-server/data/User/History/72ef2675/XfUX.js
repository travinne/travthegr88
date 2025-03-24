

fetch('https://flatter-cuties.vercel.app/characters')
.then(response => response.json())
.then(Characters  => {
    const characterBar = document.getElementById('character-bar');
    characterBar.innerHTML = "";

    Characters.forEach(Character =>{
        const span = document.createElement('span');
        span.textContent = Character.name;
        span.addEventListener('click', () => displayCharacter(Character));
        characterBar.appendChild(span)      
    });
})

function displayCharacter(character){
    document.getElementById('name').textContent = character.name;
    document.getElementById('image').textContent = character.image;
    document.getElementById('vote-count').textContent = character.votes;
}

