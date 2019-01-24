var TeamModel = Backbone.Model.extend({
    defaults:{
        city: null,
        nickname: null,
        founded: null
    },
});

var TeamList = Backbone.Collection.extend({
    model: TeamModel
});

var TeamView = Backbone.View.extend({
    tagName: 'li',
    template: _.template("<h3><%= city %></h3>"),

    initialize: function(){
        this.render();
    },
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

var TeamViewCollection = Backbone.View.extend({
    el: "#allteams",

    initialize: function(){
        this.render();
    },
    render: function(){
        _.each(teams.models, function(team) {
            var teamview = new TeamView({model: team});
            this.$el.append(teamview.render().$el);
        }, this);
    }
});

var TeamHistoryView = Backbone.View.extend({
    el: $("#teams"),
    template: _.template("<p>City: <%= city %></p><p>Nickname: <%= nickname %></p>" + 
    "<p>Year founded: <%= founded %></p>"),

    initialize: function(){
        this.listenTo(this.model, "add", this.render);
    },
    render: function(team) {
        $("#info").html(this.template(team[0].attributes));
        return this;
    },
    events: {
        "click #allteams li": "create"
    },
    create: function(t) {
        t.preventDefault();
        var c = t.currentTarget.textContent;
        var team = _.filter(teamlist.collection.models, function (data) {
            return data.get("city") == c;
        })
        this.render(team);
    }
});

var team1 = new TeamModel({city: "Leicester City", nickname: "The Foxes", founded: "1884"});
var team2 = new TeamModel({city: "Arsenal", nickname: "The Gunners", founded: "1886"});
var team3 = new TeamModel({city: "Manchester United", nickname: "The Red Devils", founded: "1878"});
var team4 = new TeamModel({city: "Everton", nickname: "The Toffees", founded: "1878"});
var team5 = new TeamModel({city: "Tottenham Hotspur", nickname: "Spurs", founded: "1882"});
var teams = new TeamList([team1, team2, team3, team4, team5]);
var teamlist = new TeamViewCollection({collection: teams});
var teamhistory = new TeamHistoryView();