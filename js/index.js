
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
        this.getPokemon()
    },
    methods : {
        randomPokeId(){            
            return Math.floor(Math.random() * 150) +1;            
        },
        getPokemon(){

            // 
            fetch(`${this.baseURL}pokemon/`+1)
            .then(res => res.json())
            .then(data => {
                this.pokemon = data     
                let pokemonId = data.id+""            
                this.pokemonId = pokemonId.padStart(3,"0")
            })
        
            fetch(`${this.baseURL}pokemon-species/`+1)
            .then(res => res.json())
            .then(data => {                
                this.pokemonSpecies = data
            })

            fetch(`${this.baseURL}evolution-chain/`+1)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        }
    }
})