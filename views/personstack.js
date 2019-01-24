var Person = Backbone.Model.extend({
    defaults:{
      name: null
    }
});

var Stack = Backbone.Model.extend({
    defaults:{
      name: null
    }
});

var PersonView = Backbone.View.extend({
    tagName: 'li',
    template: _.template("<%= name %>"),

    initialize: function(){
        this.render();
    },
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        $('.people').append(this.$el);
        return this;
    }
});

var StackView = Backbone.View.extend({
    tagName: 'li',
    template: _.template("<%= name %>"),

    initialize: function(){
        this.render();
    },
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        $('.stacks').append(this.$el);
        return this;
    }
});

var barry = new Person({name: "Barry"});
var personView1 = new PersonView({model: barry});
var larry = new Person({name: "Larry"});
var personView2 = new PersonView({model: larry});
var terry = new Person({name: "Terry"});
var personView3 = new PersonView({model: terry});
var jerry = new Person({name: "Jerry"});
var personView4 = new PersonView({model: jerry});
var harry = new Person({name: "Harry"});
var personView5 = new PersonView({model: harry});

var ruby = new Stack({name: "Ruby"});
var stackView1 = new StackView({model: ruby});
var ios = new Stack({name: "iOS"});
var stackView2 = new StackView({model: ios});
var lamp = new Stack({name: "LAMP"});
var stackView3 = new StackView({model: lamp});
var mean = new Stack({name: "MEAN"});
var stackView4 = new StackView({model: mean});
var python = new Stack({name: "Python"});
var stackView5 = new StackView({model: python});

