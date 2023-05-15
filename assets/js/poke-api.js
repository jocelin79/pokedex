const pokeApi = {}

pokeApi.getPokemons = function(offset = 0, limit = 5) {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map((pokemon) => fetch(pokemon.url).json))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => {
        console.log(pokemonsDetails)
    })
}

Promise.all([
    fetch(),
    fetch(),
    fetch(),
    fetch(),
]).then((results) => {
    console.log(results)
})