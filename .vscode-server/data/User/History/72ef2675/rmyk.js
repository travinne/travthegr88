fetch('http://localhost:3000/characters')
.then(response => response.json())
.then(Characters  => {
    const characterbar = document.getElementById('character-bar');
    Characters.forEach(Character =>{
        const span = document.createElement('span')
        span.textContent = Character        
    });
})
