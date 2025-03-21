const apiUrl = "https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("pokemon-card");

const button = document.getElementById("search");

button.addEventListener("click", () => {
    const userInput = document.getElementById("text").value;
    fetchPokemonData(userInput);
});

async function fetchPokemonData(userInput) {
    try{
        const response = await fetch(apiUrl+userInput);

        if (!response.ok){
            throw new Error(`Erreur HTTPS: ${response.status}`);
        }
    
        const pokemonData = await response.json();

        displayPokemon(pokemonData);
    
        /* console.log(pokemonData); */
    }catch (error) {
        console.error('Erreur lors de la récupération:', error);
        card.innerHTML =
        `<p class="error">Erreur lors de la récupération:', ${error}</p>`;
    }
}

function displayPokemon(pokemon){
    console.log(pokemon.name);

    card.innerHTML = 
    /* use this to make it working :  ` */
    `<div class="pc-body">
        <h2>${pokemon.name}</h2>
        <span class="pc-id">#${pokemon.id}</span>

        <div class="pc-img">
            <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}"/>
        </div>

        <div class="pc-t">
            <h5>Type(s):</h5>
            ${pokemon.types.map(t => 
                `<span>${t.type.name}</span>`
            ).join(' ')}
        </div>

        <div>
            <h5>Height / Weight</h5>
            <p>${pokemon.height / 10} M / ${pokemon.weight / 10} KG</p>
        </div>

        <div class="pc-a">
            <h5>Abilities:</h5>
            ${pokemon.abilities.map(a => 
                `<span>${a.ability.name}</span>`
            ).join(' ')}
        </div>
    </div>
    `;
}