var TravelTimeModel = Backbone.Model.extend({
    defaults: {
        AverageTime: null,
        CurrentTime: null,
        Description: null,
        Distance: null,
        EndPoint: null,
        Name: null,
        StartPoint: null,
        TimeUpdated: null,
        TravelTimeID: null
    }
});

var TravelTimeCollection = Backbone.Collection.extend({
    model: TravelTimeModel,
    url: "http://wsdot.com/Traffic/api/TravelTimes/TravelTimesREST.svc/GetTravelTimesAsJson?AccessCode=e901f9a2-936d-49fb-90a7-304f89fb5431",
})
var travelTimes = new TravelTimeCollection();
travelTimes.fetch()
    .then(function() {
        console.log("The travelTimes collection");
        console.log(travelTimes);

        console.log("The length of the travelTimes collection");
        console.log(travelTimes.length);

        console.log("The 30th model in the list [Requirement: use the at() method]");
        console.log(travelTimes.at(30));

        console.log("The CurrentTime of the first model [Do this without using at()]");
        console.log(travelTimes.first());

        console.log("All the models with a CurrentTime of 10");
        for (i = 0; i < travelTimes.length; i++) {
            if (travelTimes.at(i).attributes.CurrentTime == 10) {
                console.log(travelTimes.at(i));
            }
        }

        console.log("The first model with the Name: 'Bellevue-Seattle via 520 (WB PM)'");
        for (i = 0; i < travelTimes.length; i++) {
            if (travelTimes.at(i).attributes.Name == "Bellevue-Seattle via 520 (WB PM)") {
                console.log(travelTimes.at(i));
                break;
            }
        }
    });
