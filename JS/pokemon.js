const apiUrl = "https://pokeapi.co/api/v2/pokemon/bellsprout";

async function fetchPokemonData() {
    try{
        const response = await fetch(apiUrl);

        if (!response.ok){
            throw new Error(`Erreur HTTPS: ${response.status}`);
        }
    
        const pokemonData = await response.json();

        displayPokemon(pokemonData);
    
        /* console.log(pokemonData); */
    }catch (error) {
        console.error('Erreur lors de la récupération:', error);
    }
}

fetchPokemonData();

function displayPokemon(pokemon){
    const card = document.getElementById("pokemon-card");

    console.log(pokemon.name);

    card.innerHTML = 
    /* use this to make it working :  ` */
    `<div class="pc-body">
        <h2>${pokemon.name}</h2>
        <span class="pc-id">#${pokemon.id}</span>

        <div class="pc-img">
            <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}"/>
        </div>

        <div>
            ${pokemon.types.map(t => 
                `<span>${t.type.name}</span>`
            ).join('')}
        </div>

        <div>
            <span>Taille / Poids</span>
            <p>${pokemon.height / 10} M / ${pokemon.weight / 10} KG</p>
        </div>

        <div>
            ${pokemon.abilities.map(a => 
                `<span>${a.ability.name}</span>`
            ).join('')}
        </div>
    </div>
    `;
}