const baseURL = "https://pokeapi.co/api/v2/pokemon";

const el = document.getElementById("pokemon-data");

const randomPokeId = () => {
    return Math.floor(Math.random() * 150) + 1;
};

const randomPokemonData = () => {
    el.innerHTML = "";
    document.getElementById("pokemon-detail").innerHTML = "";
    getPokemon(randomPokeId());
};

const closeDetail = () => {
    document.getElementById("pokemon-container").classList.add("flex");
    document
        .getElementById("pokemon-container")
        .classList.add("justify-center");
    document
        .getElementById("pokemon-container")
        .classList.add("lg:col-span-12");

    document.getElementById("pokemon-detail-container").classList.add("hidden");
};

let pokeMoves = "";

// let img = `<img src=${data.sprites.other.dream_world.front_default}  class="lg:h-28 lg:w-28 "></img> `;
// let img = `<img src=${ data.sprites.versions["generation-v"]["black-white"].front_default }  class="w-32 h-32"></img>`

function getPokemon(id) {
    fetch(`${baseURL}/${id}`)
        .then((res) => res.json())
        .then((data, index) => {
            pokeMoves = data.moves;

            let name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            let type = data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1)

            el.innerHTML = `
                <div>
                    <div class='p-3'>
                        <div class='relative flex items-center'>                
                            <div class='flex justify-center '>
                                <img src=${data.sprites.other.dream_world.front_default}  class=" h-24 w-24 lg:h-28 lg:w-28"></img>
                            </div>                     
                        </div>
                    </div>

                    <div class="p-5 text-left">                    
                        <div class='rounded-full flex justify-center items-center px-10 w-10 bg-indigo-500 text-gray-200 font-bold'>#${data.id}</div>                    
                        <div class="text-5xl font-bold text-gray-300 mt-2">${name}</div>                                                                                
                        <div class="my-2">
                            <div class='text-green-500 font-extrabold text-lg'>${type}</div>                        
                        </div>
                    </div>   
                </div>
            `;
        });
}

const showPokemonDetail = () => {
    document.getElementById("pokemon-container").classList.remove("flex");
    document
        .getElementById("pokemon-container")
        .classList.remove("justify-center");
    document
        .getElementById("pokemon-container")
        .classList.remove("lg:col-span-12");
    document.getElementById("pokemon-container").classList.add("lg:col-span-6");

    document
        .getElementById("pokemon-detail-container")
        .classList.remove("hidden");

    pokeMoves.forEach((item) => {
        document.getElementById("pokemon-detail").innerHTML += `
                <div class="rounded-full p-1 m-1 px-3 border border-gray-200 cursor-pointer hover:bg-green-500 duration-150 hover:text-white">
                    ${item.move.name}
                <div>
            `;
    });
};

// getPokemon(randomPokeId());

getPokemon(1)   
