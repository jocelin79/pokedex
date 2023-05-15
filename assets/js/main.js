function convertPokemonToLi(pokemon){
    return `
        <li class="pokemon">
            <span class="number">${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                <img src="" alt="${pokemon.name}">
            </div>
        </li>
    `
}

const pokemonsOl = document.getElementById('pokemonsOl')

pokeApi.getPokemons().then((pokemonList = []) => {
    const newHtml = pokemonList.map(convertPokemonToLi).join('')
    pokemonsOl.innerHTML = newHtml
})