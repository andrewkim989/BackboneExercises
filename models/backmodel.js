var StackModel = Backbone.Model.extend({
    defaults: {
      title: null,
      instructor: null,
      language: null
    },
    initialize: function(){
      console.log("Stacks");
      this.attributes.instructor = "Michael Choi";
    }
});

var stack1 = new StackModel({title: "Ruby on Rails", language: "Ruby"});
console.log(stack1.attributes.title);
console.log(stack1.attributes.instructor);
console.log(stack1.attributes.language);

var stack2 = new StackModel({title: "MEAN", language: "Javascript"});
console.log(stack2.attributes.title);
console.log(stack2.attributes.instructor);
console.log(stack2.attributes.language);

var stack3 = new StackModel({title: "Python", language: "Python"});
console.log(stack3.attributes.title);
console.log(stack3.attributes.instructor);
console.log(stack3.attributes.language);

/*
var malware = new BookModel({title: "<script>alert('gotcha!')</script>"});
var escapedString = malware.escape('title');

var BookModel = Backbone.Model.extend({
  defaults: {
    title: null,
    author: null
  },
  validate: function(attrs, options){
    if (!attrs.author){
      return "Book must have an author";
    }
  }
});
var myBook = new BookModel({title: "Charlotte's Web"});
myBook.on('invalid', function(model, error){
  alert(model.get('title')+" found to be invalid. Reason: "+error);
});
myBook.save();
*/