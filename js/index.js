
const app = new Vue({       
    el : "#app",        
    data : {
        baseURL : 'https://pokeapi.co/api/v2/pokemon/',
        pokemonData : '',    
        pokemonId : '',

    },
    mounted(){
        this.getPokemon()
    },
    methods : {
        randomPokeId(){            
            return Math.floor(Math.random() * 150) +1;            
        },
        getPokemon(){
            fetch(`${this.baseURL}`+1)
            .then(res => res.json())
            .then(data => {
                this.pokemonData = data     
                let pokemonId = data.id+""            
                this.pokemonId = pokemonId.padStart(3,"0")
            })
        }
    }
})