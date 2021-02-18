
const app = new Vue({       
    el : "#app",        
    data : {
        baseURL : 'https://pokeapi.co/api/v2/',
        pokemon : '',    
        pokemonSpecies : '',
        pokemonId : '',          
        pokemonEvolutionChain : [],
    },
    mounted(){
        this.getPokemon(this.randomPokeId())
    },
    methods : {
        randomPokeId(){            
            return Math.floor(Math.random() * 150) +1;            
        },
        getPokemon(id){
        
            // get pokemon data
            fetch(`${this.baseURL}pokemon/`+id)
            .then(res => res.json())
            .then(data => {
                this.pokemon = data     
                let pokemonId = data.id+""            
                this.pokemonId = pokemonId.padStart(3,"0")
            })
        
            // get pokemon species data
            fetch(`${this.baseURL}pokemon-species/`+id)
            .then(res => res.json())
            .then(data => {                
                this.pokemonSpecies = data
            })

            // get pokemon evolution chain data
            fetch(`${this.baseURL}evolution-chain/`+id)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        }
    }
})