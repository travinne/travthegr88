document.addEventListener('DOMContentLoaded',loadGames);

function selectPlan(plan){
    alert('you selected this plan');
}

const games = [
       {id:1,
        name:'fifa 25',
        Image:'https://pin.it/2I3Z2PV95',
        description:'playstation 5',
        price:'$ 65.oo'
      },
      {id:2,
        name:'GTA V',
        Image:'',
        description:'playstation 4',
        price:'$ 35.00'
      },
      {id:3,
        name:'red ded redemtion',
        Image:'',
        description:'playstation 4',
        price:'$57.00'
      },
      {id:4,
        name:'assassins creed mirage',
        Image:'',
        description:'playstation 5',
        price:'$ 55.00'
      },
      {id:5,
        name:'need for speed unbound',
        Image:'',
        description:'playstation 5',
        price:'$ 60.00 '
      },
      {id:6,
        name:'astros play room',
        Image:'',
        description:'playstation 5',
        price:'free'
      },
      {id:7,
        name:'red ded redemtion 2',
        Image:'',
        description:'playstation 5',
        price:'$ 65.00'
      },
      {id:8,
        name:'call of duty',
        Image:'',
        description:'playstation 5',
        price:'$ 75.00'
      },
      {id:9,
        name:'GTA IV',
        Image:'',
        description:'playstation 5',
        price:'$ 120.00'
      },
      {id:10,
        name:'assassins creed shadows',
        Image:'',
        description:'playstation 5,x-box 1',
        price:'$ 95.00',
      }
]

function displayGames(){
    const gameMenu = document.getElementById('container');
    gameMenu.innerHTML = ""

    games.forEach(game =>{
        const img = document.createElement('img');
        img.src = game.Image;
        img.alt = game.name;
        img.addEventListener('click',() => handleclick(game));
        gameMenu.appendChild(img)
    })
}

function handleclick(game){ 
    document.getElementById('game.name').textContent = game.name;
    document.getElementById('game.image').src = game.Image;
    document.getElementById('game.description').textContent = game.description;
    document.getElementById('game.price').textContent = game.price;
}


