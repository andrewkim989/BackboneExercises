var StudentModel = Backbone.Model.extend({
    defaults:{
        name: null
    },

    initialize: function(){
        this.listenTo(this, 'change', this.studentChange);
    },
    
    studentChange: function(){
        console.log("Change caught by model!");
    }
});

var StudentCollection = Backbone.Collection.extend({
    model: StudentModel,

    initialize: function(){
        this.listenTo(this, 'change', this.studentChange);
        this.listenTo(this, 'add', this.studentAdded);
        this.listenTo(this, 'remove', this.studentRemoved);
    },
    studentChange: function(){
        console.log("I sensed a change in one of my students!");
    },
    studentAdded: function(){
        console.log("New student added!");
    },
    studentRemoved: function() {
        console.log("Student removed!");
    }
});

//Create 4 students. Give each of those students different names
var student1 = new StudentModel();
var student2 = new StudentModel();
var student3 = new StudentModel();
var student4 = new StudentModel();
student1.set("name", "Twilight Sparkle");
student2.set("name", "Pinkie Pie");
student3.set("name", "Rainbow Dash");
student4.set("name", "Rarity");

//Create a student collection. Add your students to this collection

var studentCollection = new StudentCollection();
studentCollection.add([student1, student2, student3, student4]);

//Change your first student’s name

student1.set("name", "Twinkle Sprinkle");

//Create a new listener for the Student Collection to trigger a ‘remove’
//event that calls a custom function called studentRemoved that console logs “Student removed”

//Remove an array of two students from your collection.

studentCollection.remove([student1, student4]);
console.log(studentCollection);