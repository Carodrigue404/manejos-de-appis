function fetchpokemon(){
const pokemonName= document.getElementById("pokemon-name").value.tolowerCase();
if(pokemonName===""){
    alert("ingrese nombre de un pokemon por favor");
    repurn;
}
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
.then((response)=>{
    if(!response.ok){
        throw new Error("pokemon no encopntrado")
    }
    return response.json();
})
.then((data)=>displaypokemon(data))
.catch((error)=>{
    console.error("error:" ,error);
    document.getElementById('pokemon-info')
    .innerHTML= `<p>${error} pokemon no encontrado</p>`;
})
}
function displaypokemon(){
    const pokemoninfo= document.getElementById("pokemon-info")
    pokemoninfo.innerHTML= `
    <p><h1>${pokemonName}</h1></p>
    <p><img src ="${pokemon.sprites.front_default}"></p>
    `
}