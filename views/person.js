var PersonModel = Backbone.Model.extend({
    defaults:{
      name: null
    }
});
var badGuy = new PersonModel({name: "Oddjob"});
console.log(badGuy);

var greetingTemplate = _.template(
    "<h1>Hey there, <%= name %></h1>"
);
console.log(greetingTemplate(badGuy));
console.log(greetingTemplate(badGuy.toJSON()));

/*$(document).ready(function(){
    $('body').append(greetingTemplate(badGuy.toJSON()));
});*/

var PersonView = Backbone.View.extend({
    tagName: 'li',
    //template: _.template("<h1>Hey there, <%= name %></h1>"),
    //template: _.template($('#greetingTemplate').html()),

    initialize: function(){
        this.render();
    },
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        $('body').append(this.$el);
        return this;
    }
});