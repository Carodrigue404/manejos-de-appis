function fetchpokemon() {
    const pokemonName = document.getElementById("pokemon-name").value.toLowerCase();
    
    if (pokemonName === "") {
        alert("Ingrese nombre de un pokemon por favor");
        return;
    }
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Pokemon no encontrado");
            }
            return response.json();
        })
        .then((data) => displaypokemon(data))
        .catch((error) => {
            console.error("Error:", error);
            document.getElementById('pokemon-info')
                .innerHTML = `<p>${error.message}</p>`;
        });
}

function displaypokemon(data) {
    const pokemonInfo = document.getElementById("pokemon-info");
    pokemonInfo.innerHTML = `
        <h1>${data.name.toUpperCase()}</h1>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p>Número: #${data.id}</p>
        <p>Altura: ${data.height / 10}m</p>
        <p>Peso: ${data.weight / 10}kg</p>
    `;
}