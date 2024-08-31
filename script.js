const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const pokemonName = document.getElementById('pokemon-name');
const pokemonId = document.getElementById('pokemon-id');
const pokemonImg = document.getElementById("pokemon-avatar")
const pokemonWeight = document.getElementById('weight');
const pokemonHeight = document.getElementById('height');
const types = document.getElementById('types');
const typesImg = document.getElementById('types-img');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');

const pokemonData = {}

const clearData = () => {
    pokemonImg.innerHTML = ""
    types.innerHTML = ""
    typesImg.innerHTML = ""
}

const fetchData = async (name_or_id) => {
    const url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${name_or_id}`
    try {
        const res = await fetch(url);
        const data = await res.json();
        showPokemonData(data)
    } catch (err) {
        console.log(err);
        alert("Pokémon not found")
    }
};

const fetchTypeImg = async (type) => {
    try {
        const res = await fetch(type);
        const data = await res.json();
        setTypeImage(data.sprites["generation-iv"].platinum.name_icon)
    } catch (err) {
        console.log(err);
    }
};

const searchPokemon = () => {
    const input = searchInput.value.toLowerCase()
    fetchData(input)
}

const showPokemonData = (data) => {
    const {base_experience, height, id, name, order, sprites, stats, types, weight} = data
    pokemonName.textContent = name.toUpperCase()
    pokemonId.textContent = `#${id}`
    pokemonWeight.textContent = `Weight: ${weight}`
    pokemonHeight.textContent =`Height: ${height}`
    // setImage(sprites)
    setStats(stats)
    setTypes(types)
    setImg(sprites, name)
}

const setStats = (stats) => {
    console.log(stats)
}

const setImg = (img, name) => {
    const {front_default} = img
    pokemonImg.innerHTML = `
        <img class="pokemon-size" src="${front_default}" alt="${name}" id="sprite"/>
    `
}

/* --------------------------------------- */

const setTypes = (pokemonTypes) => {
    pokemonTypes.forEach(({type}) => {
        types.innerHTML += `<p class="hide">${type.name.toUpperCase()}</p>`
        fetchTypeImg(type.url)
    });
}

const setTypeImage = (src) => {
    typesImg.innerHTML += `
        <img src="${src}" alt="pokemon-pic" class="pokemon-type-img-size"/>
    `  
}

/* ----------------------------------------- */

searchButton.addEventListener("click", () => {
    clearData()
    searchPokemon()
})

/* 
base_experience: int - right
height: int - right
id: int - right
name: string - right
order: int
sprites: obj - right
stats: array of obj
types: array of obj - right
weight: int  - irght
*/
