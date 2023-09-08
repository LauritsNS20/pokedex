const URL = new URLSearchParams(window.location.search)

fetch(`https://pokeapi.co/api/v2/pokemon/${URL.get("name")}`)
.then(function(response) {
    if (response.status === 200) {
      return response.json()
    } else {
      document.body.innerText += "fejl ikke nogen pokemon til dig"
    }
  })
  .then(function(data) {
    console.log(data)
    const DIV = document.querySelector("pokemon")
    DIV.innerHTML = `
    <h1>${data.name}</h1> 
    <p>Height: ${data.height}</p>
    <p>Abilities</p>
    <ul>${data.abilities.forEach(
      elem => `<li>${elem.abilities.name}</li>`
      )}</ul>`
  })
  