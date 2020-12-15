$(document).ready(function (){
	$.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function(data) {
		 var select = $("#idselect");
		 $.each(data,function(index,manuf) {
			 var options = $('<option value="'+manuf._id+'">'+manuf._id+'</option>');
			 $(select).append(options);
		 })
	 })
});
function editManufacturer() {
	event.preventDefault();
	var id = document.getElementById("idselect").value;
	if(id!==null)
	{
		$.ajax({
			type:"DELETE",
			url:"https://webtechcars.herokuapp.com/api/manufacturers/"+id,
			headers: {
				"Access-Control-Allow-Origin": "*"
			},
			success: function() {
				alert("Manufacturer successfully removed");
				location.reload();
			},
			error: function() {
				alert("Error while deleting manufacturer");
			}
		});
		const formdata = JSON.stringify({
			"name": document.getElementsByName("manufacturername")[0].value,
			"country": document.getElementsByName("country")[0].value,
			"founded": document.getElementsByName("carcolor")[0].value,
		});
		console.log(formdata);
		$.ajax({
			type:"POST",
			url:"https://webtechcars.herokuapp.com/api/manufacturers/",
			headers: {
				"Access-Control-Allow-Origin": "*"
			},
			data: formdata,
			contentType:"application/json",
			success: function() {
				alert("Manufacturer successfully edited");
				location.reload();
			},
			error: function() {
				alert("Error on editing manufacturer");
			}
		});
	}
	else
	{
		alert('ID is undefined');
	}
}
