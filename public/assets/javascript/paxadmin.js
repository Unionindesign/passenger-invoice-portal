$(document).ready(function() {
    var searchedGroup;
    $.get("/api/pax", function(data) {

        for (var i = 0; i < data.length; i++) {
            searchedGroup = data[i].group_name.replace(/\s+/g, "").toLowerCase(); 
            selectedPax = data[i].id;
        $("#group-name").html(data[i].group_name);
        $("#tour-name").html(data[i].tour_name);
        $("#tour-code").html(data[i].tour_code);
        $("#dep-date").html(data[i].departure_date);
        $("#due-date").html(data[i].due_date);
        $("#totalGC").html(data[i].total_group_credit);

            
        $("#passengersTable").append(
            "<tr><td>" + data[i].invoice + "</td><td>" 
                    + data[i].pax_name + "</td><td>" 
                    + data[i].payments + "</td><td>" 
                    + data[i].balance + "</td><td>" 
                    + data[i].isGroupLeader + "</td><td>" 
                    + data[i].hasGroupCredit + "</td><td>" 
                    + data[i].group_credit_split + "</td><td>" 
                    + data[i].group_credit_amt + "</td><td>"
                    + `<input type="checkbox" id="`+ selectedPax +`"></td></tr>"`);   
         }
    });

    
    $.get("/api/pax", function(data) {
    
            for (var i = 0; i < data.length; i++) {
                console.log("oax name ios:", data[2].pax_name);
                       //For Modal to preview Group invoice
        $("#group-name-modal").html(data[i].group_name);
        $("#group-inv-modal").html(data[i].invoice);
        $("#tour-name-modal").html(data[i].tour_name);
        $("#tour-code-modal").html(data[i].tour_code);
        $("#dep-date-modal").html(data[i].departure_date);
        $("#due-date-modal").html(data[i].due_date);

        $("#passengersTableModal").append(
            "<tr><td>" + data[i].pax_name + "</td><td>" 
                    + data[i].payments + "</td><td>" 
                    + data[i].balance + "</td><td>" 
                    + data[i].group_credit_amt + "</td><td>" );

        }
    });
});