

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

