fetch("https://pokeapi.co/api/v2/pokemon/100")
.them(res => res.json())
.them(function(result) {
    document.body.innerHTML += `<h1>${result.name}</h1>
    <p>species: ${result.species.name} </p>  
    <img src"${result.sprites.other.dream_world.front_default}" alt></img>`  
}) 