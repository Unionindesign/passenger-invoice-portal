$(document).ready(function() {
    var searchedGroup;
    $.get("/api/groups", function(data) {

        console.log("this is the data:", data);
        for (var i = 0; i < data.length; i++) {
            searchedGroup = data[i].group_name.replace(/\s+/g, "").toLowerCase();

        $("#groupsTable").append(
            "<tr><td>" + data[i].group_name + "</td><td>" 
                    + data[i].tour_name + "</td><td>" 
                    + data[i].tour_code + "</td><td>" 
                    + data[i].departure_date + "</td><td><a href='/groups/" 
                    + searchedGroup + "'>Go to Group</a></td></tr>");
            
         }
    });

//     getGroups();
    
//     function createGroupRow(groupData) {
//         var newTr = $("<tr>");
//         newTr.data("group", groupData);
//         newTr.append("<td>" + groupData.group_name + "<td>");
//         newTr.append("<td>" + groupData.tour_name + "<td>");
//         newTr.append("<td>" + groupData.tour_code + "<td>");
//         newTr.append("<td>" + groupData.departure_date + "<td>");
//         newTr.append("<td><a href='/groups/group_id=" +groupData.id + "'>Go to Group</a></td>")
//         return newTr;

//         }

//     function getGroups() {
//         $.get("/api/groups", function(data) {
//         var newRows = [];
//         for (var i = 0; i < data.length; i++) {
//             newRows.push(createGroupRow(data[i]));
//             console.log(newRows);
//         }
//         // renderGroupList(newRows);
//         })
//     }

//     // function renderGroupList(rows) {
//     //     groupList.children().not(":last").remove();
//     //     groupContainer.children(".alert").remove();
//     //     if (rows.length) {
//     //         console.log(rows);
//     //         groupList.prepend(rows);
//     //     }
//     //     else {
//     //         console.log ("can't render rows - sad face!")
//     //     }

//     // }

});



// // From Train example - not working?



