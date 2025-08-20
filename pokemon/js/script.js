//si esta ok error 200, error 400 archivos malos 
function fetchpokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon/lugia')
        .then(response => response.json())
        .then(data => displayPokemon(data))
        .catch(error => console.error('el error es', error))
}

function displayPokemon(pokemon){
    const pokmonInfo = document.getElementById('pokemon-info');
    pokmonInfo.innerHTML=`
    <p> <h1>${pokemon.name}</h1></p>
    <p> <h2>peso: ${pokemon.weight} KG </h2></p>
    <p> <h2>altura: ${pokemon.height} M </h2></p>
    <p><img src ="${pokemon.sprites.front_default}"></p>
    `;
}
