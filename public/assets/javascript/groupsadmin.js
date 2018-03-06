$(document).ready(function() {

    $.get("/api/groups", function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
        $("#groupsTable > tbody" +i).append(
            "<tr><td>" + data[i].group_name + "</td><td>" 
                    + data[i].tour_name + "</td><td>" 
                    + data[i].tour_code + "</td><td>" 
                    + data[i].departure_date + "</td></tr>");
            
        }
    });
});
            
// from star wars express game

//     $.get("/api/groups", function(data) {
//         for (var i = 0; i < data.length; i++) {
//         var wellSection = $("<div>");
//         wellSection.addClass("well");
//         wellSection.attr("id", "character-well-" + i);
//         $("#well-section").append(wellSection);

//         $("#character-well-" + i).append("<h2>" + data[i].name + "</h2>");
//         $("#character-well-" + i).append("<h3>Role: " + data[i].role + "</h4>");
//         $("#character-well-" + i).append("<h3>Age: " + data[i].age + "</h4>");
//         $("#character-well-" + i).append("<h3>Force Points: " + data[i].forcePoints + "</h4>");
//         }
//     });
// });


