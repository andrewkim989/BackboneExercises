var StarshipModel = Backbone.Model.extend({
    defaults: {
        name: null,
        //model: null,
        manufacturer: null,
        cost_in_credits: null,
        /*length: null,
        max_atmosphering_speed: null,*/
        crew: null,
        /*passengers: null,
        cargo_capacity: null,
        consumables: null,
        hyperdrive_rating: null,
        MGLT: null,
        starship_class: null,
        pilots: null,
        films: null,
        created: null,
        edited: null,
        url: null,*/
    }
});

var StarshipCollection = Backbone.Collection.extend({
    model: StarshipModel,
    url: "https://swapi.co/api/starships/",
    parse: function(starship){
        return starship.results;
    }
});
var star = new StarshipCollection();
star.fetch()
    .then(function() {
        console.log(star);

        var falcon; 

        _.each(star.models, function (s) {
            console.log(s.get("name"));
            if (s.get("name") == "Millennium Falcon") {
                console.log("Found the ship");
                s.set({"name": "Millennium Falcon", "cost_in_credits": "Priceless"});
                falcon = s;
                console.log(_.findWhere(s, {"name": "Millennium Falcon"}));
            }
        })
        console.log(falcon);
    });