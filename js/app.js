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

function getPokemon(id) {
    fetch(`${baseURL}/${id}`)
        .then((res) => res.json())
        .then((data, index) => {
            pokeMoves = data.moves;

            let name = data.name.charAt(0).toUpperCase() + data.name.slice(1);

            document.getElementById("pokemon-height").innerHTML =
                data.height + " m";
            document.getElementById("pokemon-weight").innerHTML =
                data.weight + " kg";

            el.innerHTML = `                         
            <div class="p-3">                
                
                <div class='p-5 border border-blue-500'>
                    <div class="font-extrabold text-5xl text-gray-200"># ${
                        data.id
                    }</div>    
                    <div class='border border-blue-500 mt-3 flex justify-center'>
                        <img src=${
                            data.sprites.other.dream_world.front_default
                        }  class="lg:h-28 lg:w-28 "></img>
                    </div>                     
                </div>

                <div class="p-5 text-center border border-blue-500">
                    <div class="text-5xl font-bold text-gray-600 mt-2">${name}</div>                                                            
                    <div class="my-2">
                        <span class='font-bold text-sm text-green-500' id="pokemon-type">${data.types[0].type.name.toUpperCase()}</span>                         
                        <span class='font-bold text-sm ml-4 text-gray-300'>${data.types[1].type.name.toUpperCase()}</span>
                    </div>
                </div>   

                <div class="text-center p-5 border border-blue-500">
                    <button class=" bg-purple-600 hover:bg-purple-800 duration-200 p-3 text-white rounded " onclick="showPokemonDetail()">Show Detail</button> 
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

getPokemon(randomPokeId());
