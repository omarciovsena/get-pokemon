const elSelect = document.getElementById("select-options");

function setValues(pokemon) {
  const elPokemonName = document.getElementById("pokemon-name");
  const elPokemonAbilities = document.getElementById("pokemon-abilities");
  const elPokemonHeight = document.getElementById("pokemon-height");
  const elPokemonExperience = document.getElementById("pokemon-experience");
  const elPokemonImage = document.getElementById("pokemon-image");

  elPokemonName.innerHTML = pokemon ? pokemon.name : '-'
  elPokemonAbilities.innerHTML = pokemon ? pokemon.abilities : '-'
  elPokemonHeight.innerHTML = pokemon ? pokemon.height : '-'
  elPokemonExperience.innerHTML = pokemon ? pokemon.baseExperience : '-'
  elPokemonImage.setAttribute('src', pokemon ? pokemon.image : 'https://via.placeholder.com/250x250')
}

function setOptions(results) {
  const options = results.map(result => {
    elSelect.add(new Option(result.name,result.name), null);
  })
}

function getPokemon(pokemonId) {
  const service = new PokemonService()
  service.getItem(pokemonId).then(response => {
    const { name, abilities, height, base_experience, sprites } = response
    const pokemon = new Pokemon(name, abilities, height, base_experience, sprites)
    setValues(pokemon)
  })
}

function loadPokemon() {
  const service = new PokemonService()
  service.getList().then(response => {
    const { results } = response
    setOptions(results)
  })
}

elSelect.addEventListener('change', function (event) {
  const value = event.target.value
  !value ? setValues() : getPokemon(value)
});

loadPokemon()
