var PokemonModel = Backbone.Model.extend({
  defaults: {
    name: null,
    url: null
  }
});

var PokemonCollection = Backbone.Collection.extend({
  model: PokemonModel,
  url: "http://pokeapi.co/api/v2/pokemon",
  parse: function(pokemon){
    return pokemon.results;
  }
});

var pokemonList = new PokemonCollection();
pokemonList.fetch()
  .then(function(){
    console.log(pokemonList);
  });