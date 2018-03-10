$(document).ready(function() {
    var searchedGroup;
    $.get("/api/groups", function(data) {

        console.log("this is the data:", data);
        for (var i = 0; i < data.length; i++) {
            searchedGroup = data[i].group_name.replace(/\s+/g, "").toLowerCase();

        $("#groupsTable").append(
            `<tr><td><a href="/admin-pax">` + data[i].group_name + "</a></td><td>"
                    + data[i].tour_name + "</td><td>" 
                    + data[i].tour_code + "</td><td>" 
                    + data[i].departure_date + "</td><td>" 
                    + data[i].pax_in_group + "</td></tr>");
            
         }
    });

});






