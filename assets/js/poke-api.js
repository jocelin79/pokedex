const pokeApi = {}

function converPokemonApiDetailToPokemon(pokeDatail){
    const pokemon = new Pokemon()
    pokemon.nome = pokeDetail.order
    pokemon.name = pokeDatail.name

    const types = pokeDatail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type
}

pokeApi.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then((pokemon) => {

            })
}

pokeApi.getPokemons = function(offset = 0, limit = 5) {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonsDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)
}