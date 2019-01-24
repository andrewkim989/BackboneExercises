var PersonModel = Backbone.Model.extend({
    defaults:{name: null}
});

var PeopleList = Backbone.Collection.extend({
    model: PersonModel
});

var person1 = new PersonModel({name: "Speros"});
var person2 = new PersonModel({name: "Mike"});
var person3 = new PersonModel({name: "Martin"});
var person4 = new PersonModel({name: "Charlie"});
var person5 = new PersonModel({name: "Dylan"});
var person6 = new PersonModel({name: "Kris"});

var myPeople = new PeopleList([person1, person2, person3, person4, person5, person6]);
var myPersonTemplate = "<h1><%= name %></h1>";

var PersonView = Backbone.View.extend({
    tagName: 'li',
    template: _.template(myPersonTemplate),

    initialize: function(){
        this.render();
    },
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

var PeopleListView = Backbone.View.extend({
    el: "#people",

    initialize: function(){
        this.render();
    },
    render: function(){
        _.each(myPeople.models, function(person) {
            var personview = new PersonView({model: person});
            //console.log(personview.render().$el);
            this.$el.append(personview.render().$el);
        }, this);
    }
});

var myPeopleList = new PeopleListView({collection: myPeople});