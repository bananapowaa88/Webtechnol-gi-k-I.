$(document).ready(function(){
  $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function(data) {
    var table = $("#manufacturersTable");
    $.each(data, function(key, value){
        var row = $('<tr></tr>');
        var nameCell = $('<td>' + value.name + '</td>');
        var countryCell = $('<td>' + value.country + '</td>');
        var foundedCell = $('<td>' + value.founded + '</td>');
        $(row).append(nameCell);
        $(row).append(countryCell);
        $(row).append(foundedCell);

        $(table).append(row);
    })
  })
});
