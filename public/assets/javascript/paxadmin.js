$(document).ready(function() {
    var searchedGroup;
    $.get("/api/pax", function(data) {

        console.log("this is the data:", data);
        for (var i = 0; i < data.length; i++) {
            searchedGroup = data[i].group_name.replace(/\s+/g, "").toLowerCase();
        $("#group-name").html(data[i].group_name);
        $("#tour-name").html(data[i].tour_name);
        $("#tour-code").html(data[i].tour_code);
        $("#dep-date").html(data[i].departure_date);
        $("#due-date").html(data[i].due_date);
        $("#totalGC").html(data[i].total_group_credit);

            
        

        $("#passengersTable").append(
            "<tr><td>" + data[i].pax_name + "</td><td>" 
                    + data[i].payments + "</td><td>" 
                    + data[i].balance + "</td><td>" 
                    + data[i].isGroupLeader + "</td><td>" 
                    + data[i].hasGroupCredit + "</td><td>" 
                    + data[i].group_credit_split + "</td><td>" 
                    + data[i].group_credit_amt + "</td></tr>");
            
         }
    });
});