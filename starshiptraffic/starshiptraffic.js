var StarshipModel = Backbone.Model.extend({
    defaults: {
        name: null,
        manufacturer: null,
        cost_in_credits: null,
        crew: null,
    }
});

var TravelTimeModel = Backbone.Model.extend({
    defaults: {
        AverageTime: null,
        Description: null,
    }
});

var StarshipCollection = Backbone.Collection.extend({
    model: StarshipModel,
    url: "https://swapi.co/api/starships/",
    parse: function(starship){
        return starship.results;
    }
});

var TravelTimeCollection = Backbone.Collection.extend({
    model: TravelTimeModel,
    url: "http://wsdot.com/Traffic/api/TravelTimes/TravelTimesREST.svc/GetTravelTimesAsJson?AccessCode=e901f9a2-936d-49fb-90a7-304f89fb5431",
});

var starshipTemplate = "<p>Name: <%= name %><p><p>Manufacturer: <%= manufacturer %><p>" + 
"<p>Number of crew: <%= crew %><p><p>Cost: <%= cost_in_credits %><p>";

var StarshipView = Backbone.View.extend({
    tagName: "div",
    template: _.template(starshipTemplate),
    className: "singlestarship",

    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

var StarshipListView = Backbone.View.extend({
    el: "#starships",

    render: function() {
        this.collection.each(function (starship) {
            var starshipView = new StarshipView({model: starship});
            this.$el.append(starshipView.render().$el);
        }, this);
        return this;
    }
});

var travelTemplate = "<p>Description: <%= Description %><p>" + 
"<p>Average time: <%= AverageTime %><p>";

var TravelView = Backbone.View.extend({
    tagName: "div",
    template: _.template(travelTemplate),
    className: "singletraffic",

    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

var TravelListView = Backbone.View.extend({
    el: "#traffic",

    render: function() {
        this.collection.each(function (travel) {
            var travelView = new TravelView({model: travel});
            this.$el.append(travelView.render().$el);
        }, this);
        return this;
    }
});

var starships = new StarshipCollection();
starships.fetch().then(function() {
    var starshipsView = new StarshipListView({collection: starships});
    starshipsView.render();
})
var travel = new TravelTimeCollection();
travel.fetch().then(function() {
    var travelView = new TravelListView({collection: travel});
    travelView.render();
})

var AppRouter = Backbone.Router.extend({
    routes: {
        "travel": "showTraffic",
        "*starship": "showStarships",
    },
    showStarships: function() {
        $("#starships").show();
        $("#traffic").hide();
    },
    showTraffic: function() {
        $("#starships").hide();
        $("#traffic").show();
    }
});

var router = new AppRouter();
Backbone.history.start();