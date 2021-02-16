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

const closePokemonDetail = () => {
    document.getElementById("pokemon-detail-container").classList.add("hidden");
};

let pokeMoves = "";

function getPokemon(id) {
    fetch(`${baseURL}/${id}`)
        .then((res) => res.json())
        .then((data, index) => {

            
            pokeMoves = data.moves;

            let name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            let type = data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1)




            el.innerHTML = `
                <div class='text-center'>
                    <div class='p-3'>
                        <div class="mb-5 text-left">  
                            <div class='text-gray-200 text-5xl font-extrabold duration-200 cursor-pointer '># ${data.id}</div>                    
                        </div>
                        <div class='flex items-center justify-center'>                                        
                            <div class=''>
                                <img src=${data.sprites.other.dream_world.front_default}  class=" h-24 w-24 lg:h-52 lg:w-52"></img>
                            </div>                     
                        </div>
                    </div>

                    <div class="p-5 ">                        

                        <div class="my-2">
                            <div class="text-5xl mb-2 font-bold text-gray-700 mt-2">${name}</div>                                                                                
                            <span class='text-green-400 font-extrabold text-lg font-mono'>${type}</span>                        
                        </div>

                        <div class='my-2'>
                            <div class='font-mono cursor-pointer text-gray-400 font-bold text-lg space-x-1'>
                                <div class='hover:text-gray-500 inline-block'>${data.abilities[0].ability.name}</div>                        
                                <div class='hover:text-gray-500 inline-block'>${data.abilities[1].ability.name}</div>                        
                            </div>                            
                        </div>

                        <div class='mt-5 text-right'>                            
                            <div class=' text-blue-500 hover:text-blue-700 duration-200 select-none cursor-pointer' onclick="showPokemonDetail()" >Show Detail</div>
                        </div>
                    </div>   
                </div>

                <div class='text-left hidden ml-10' id='pokemon-detail-container'>

                    <div class='cursor-pointer mb-5 text-right text-red-500 hover:text-red-600 select-none ' onclick="closePokemonDetail()">Close</div>

                    <div class="mb-5 font-mono">
                        <div class='mb-1 font-sans font-bold text-gray-700'>General</div>
                        <div class='inline-block mr-5'>Height: <span>${data.height}m</span> </div>
                        <div class='inline-block'>Weight: <span>${data.weight}kg</span> </div>
                    </div>                        

                    <div class="mb-5 font-mono">
                        <div class='mb-1 font-sans font-bold text-gray-700'>Abilities</div>
                        <div class='inline-block mr-5'>${data.abilities[0].ability.name}</div>
                        <div class='inline-block'>${data.abilities[1].ability.name}</div>
                    </div>            

                    <div class="mb-5 font-mono flex-wrap flex">
                        
                        
                    </div>
                    
                
                    

                </div>

            `;
        });


}

const showPokemonDetail = () => {    
    document
        .getElementById("pokemon-detail-container")
        .classList.remove("hidden");

    pokeMoves.forEach((item) => {
        document.getElementById("pokemon-moves").innerHTML += `
                <div>${item.move.name}<div>
            `;
    });

};

getPokemon(randomPokeId());

// getPokemon(1)   
