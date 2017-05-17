import { Injectable } from '@angular/core';

export interface PokemonRules{
  id:number;
  nombre:string;
  imagen:string;
  tipo:string;
  bio:string;
}

@Injectable()
export class PokemonesService {

  pokemones:PokemonRules[] = [
	{
		"id":0,
		"nombre":"Bulbizarre",
		"imagen":"001.png",
		"tipo":"Plante",
		"bio":"La graine sur le dos de Bulbizarre est une réserve de nutriments. Il la fait doucement pousser en absorbant les rayons du soleil, et emmagasine de l'énergie dedans en vue de son évolution. S'il dépense trop souvent son énergie, il n'évoluera pas car l'ouverture de son bulbe dépend de ses réserves de nutriments."
	},
	{
		"id":1,
		"nombre":"Salamèche",
		"imagen":"002.png",
		"tipo":"Feu",
		"bio":"De récentes études prouvent que la flamme qui brûle sur la queue de Salamèche indique son état de santé, mais aussi son caractère. S'il se sent faible, la flamme sera toute petite. Et si par malheur sa flamme s'éteint, il meurt, car c'est le seul moyen pour lui de se refroidir."
	},
	{
		"id":2,
		"nombre":"Carapuce",
		"imagen":"003.png",
		"tipo":"Eau",
		"bio":"Les bébés Carapuce sont extrêmement vulnérables à la naissance, car leur carapace est toute molle. C'est pourquoi ils boivent régulièrement une eau riche en minéraux. Elle devient ensuite dure comme de la pierre. S'il est menacé, il se réfugie à l'intérieur et envoie un jet d'eau à son agresseur."
	},
	{
		"id":3,
		"nombre":"Pikachu",
		"imagen":"004.png",
		"tipo":"Electrique",
		"bio":"Les jours d'orages, on peut apercevoir des Pikachu regroupés en haut des arbres ou des poteaux. Ces Pokémons attendent patiemment que la foudre leur tombe dessus, pour pouvoir recharger au maximum leur réserve d'électricité. Quand il attaque, des milliers de volts sortent par ses joues rouges."
	}
];


  obtenerPokemones(){
    return this.pokemones;
  }

	obtenerPokemon(id:number):PokemonRules{
		for(let pokemon of this.pokemones){
			if(pokemon.id == id){
				return pokemon;
			}
		}

	}

	buscarPokemon(termino:string){
		let pokeArr = [];
		termino = termino.toLowerCase();
		for(let pokemon of this.pokemones){
			let nombre = pokemon.nombre.toLowerCase();
			if(nombre.indexOf(termino) >= 0){
				pokeArr.push(pokemon)
			}
		}

		return pokeArr;
	}

  constructor() { }

}
