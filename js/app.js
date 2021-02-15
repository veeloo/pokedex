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
            <div class='p-3'>
                    <div class='relative'>
                        <div class='text-gray-200 font-extrabold text-9xl'># ${data.id}</div>
                        <div class='absolute w-full h-full flex top-12 '>
                            <img src=${data.sprites.other.dream_world.front_default}  class='lg:h-30 lg:w-30 '>
                        </div>
                    </div>
                </div>
                

                <div class='pt-10'>
                    <div class='text-5xl font-bold text-gray-600 mt-2'>${name}</div>                            

                        <div class='my-5 text-left grid lg:grid-cols-10 gap-y-2 lg:gap-y-0 lg:gap-x-5'>
                            <div class='col-span-3 text-left lg:text-right text-sm font-bold text-gray-400'>${data.stats[0].stat.name}</div>
                            <div class='col-span-1 font-bold text-gray-400 text-sm'> ${data.stats[0].base_stat}</div>
                            <div class='col-span-6'>
                                <div class="h-3 relative max-w-xl rounded-full overflow-hidden mt-2">
                                    <div class="w-full h-full bg-gray-200 absolute"></div>                                        
                                    <div class="h-full bg-red-500 absolute" style="width:${data.stats[0].base_stat}pt"></div>
                                </div>
                            </div>

                            <div class='col-span-3 text-left lg:text-right text-sm font-bold text-gray-400'>${data.stats[1].stat.name}</div>
                            <div class='col-span-1 font-bold text-gray-400 text-sm'> ${data.stats[1].base_stat}</div>
                            <div class='col-span-6'>
                                <div class="h-3 relative max-w-xl rounded-full overflow-hidden mt-2">
                                    <div class="w-full h-full bg-gray-200 absolute"></div>                                        
                                    <div class="h-full bg-red-600 absolute" style="width:${data.stats[1].base_stat}pt"></div>
                                </div>
                            </div>

                            <div class='col-span-3 text-left lg:text-right text-sm font-bold text-gray-400'>${data.stats[2].stat.name}</div>
                            <div class='col-span-1 font-bold text-gray-400 text-sm'> ${data.stats[2].base_stat}</div>
                            <div class='col-span-6'>
                                <div class="h-3 relative max-w-xl rounded-full overflow-hidden mt-2">
                                    <div class="w-full h-full bg-gray-200 absolute"></div>                                        
                                    <div class="h-full bg-green-500 absolute" style="width:${data.stats[2].base_stat}pt"></div>
                                </div>
                            </div>

                            <div class='col-span-3 text-left lg:text-right text-sm font-bold text-gray-400'>${data.stats[3].stat.name}</div>
                            <div class='col-span-1 font-bold text-gray-400 text-sm'> ${data.stats[3].base_stat}</div>
                            <div class='col-span-6'>
                                <div class="h-3 relative max-w-xl rounded-full overflow-hidden mt-2">
                                    <div class="w-full h-full bg-gray-200 absolute"></div>                                        
                                    <div class="h-full bg-pink-700 absolute" style="width:${data.stats[3].base_stat}pt"></div>
                                </div>
                            </div>

                            <div class='col-span-3 text-left lg:text-right text-sm font-bold text-gray-400'>${data.stats[4].stat.name}</div>
                            <div class='col-span-1 font-bold text-gray-400 text-sm'> ${data.stats[4].base_stat}</div>
                            <div class='col-span-6'>
                                <div class="h-3 relative max-w-xl rounded-full overflow-hidden mt-2">
                                    <div class="w-full h-full bg-gray-200 absolute"></div>                                        
                                    <div class="h-full bg-green-700 absolute" style="width:${data.stats[4].base_stat}pt"></div>
                                </div>
                            </div>

                            <div class='col-span-3 text-left lg:text-right text-sm font-bold text-gray-400'>${data.stats[5].stat.name}</div>
                            <div class='col-span-1 font-bold text-gray-400 text-sm'> ${data.stats[5].base_stat}</div>
                            <div class='col-span-6'>
                                <div class="h-3 relative max-w-xl rounded-full overflow-hidden mt-2">
                                    <div class="w-full h-full bg-gray-200 absolute"></div>                                        
                                    <div class="h-full bg-yellow-500 absolute" style="width:${data.stats[5].base_stat}pt"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div>   

                <button class=" bg-purple-600 hover:bg-purple-800 duration-200 p-3 text-white rounded " onclick="showPokemonDetail()">Show Detail</button> 
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
                <div class='rounded-full p-1 m-1 px-3 border border-gray-200 cursor-pointer hover:bg-green-500 duration-150 hover:text-white'>
                    ${item.move.name}
                <div>
            `;
    });
};

getPokemon(randomPokeId());
