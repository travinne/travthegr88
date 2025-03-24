

fetch('http://localhost:3000/characters')
.then(response => response.json())
.then(Characters  => {
    const characterBar = document.getElementById('character-bar');
    Characters.forEach(Character =>{
        const span = document.createElement('span');
        span.textContent = Character.name;
        span.addEventListener('click', () => displayCharacter(Character));
        characterBar.appendChild(span)      
    });
})

function displayCharacter(){
    document.getElementById('name').textContent = Character.name,
    document.getElementById('image').textContent = Character.image,
    document.getElementById('vote-count').textContent = Character.votes,
}

