const URL = new URLSearchParams(window.location.search)
const OFFSET = parseInt(URL.get("offset") || "0")
const NEXT_PAGE  = document.querySelector(".nextPage")
const LAST_PAGE = document.querySelector(".lastPage")

NEXT_PAGE.href = `/?offset=${OFFSET + 20}`
LAST_PAGE.href = `/?offset=${OFFSET <= 0 ? 0 : OFFSET - 20}`

fetch(`https://pokeapi.co/api/v2/pokemon?offset=${OFFSET}`)
.then(function(response) {
  if (response.status === 200) { 
    return response.json()
  } else {
    document.body.innerText += "fejl ikke nogen pokemon til dig"
  }
})
.then(function(data) {
    const UL = document.querySelector(".pokemonList")
    data.results.forEach(function(result) {
        const LI = document.createElement("li")
        LI.innerHTML = `<a href="/pokemon.html?name=${result.name}">${result.name}</a>`
        UL.append(LI)
    })
})

















//fetch("https://pokeapi.co/api/v2/pokemon/100")
//.them(res => res.json())
//.them(function(result) {
   // document.body.innerHTML += `<h1>${result.name}</h1>
   // <p>species: ${result.species.name} </p>  
   // <img src"${result.sprites.other.dream_world.front_default}" alt></img>`  
//}) 

// statuskoder 
// 200 = success, 300 = nedirects, 400 = client errors, 500 = server errors.