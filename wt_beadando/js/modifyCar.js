$(document).ready(function (){
	$.getJSON("https://webtechcars.herokuapp.com/api/cars", function(data) {
		 var select = $("#idselect");
		 $.each(data,function(index,car) {
			 var options = $('<option value="'+car._id+'">'+car._id+'</option>');
			 $(select).append(options);
		 })
	 })
});
function editCar() {
	event.preventDefault();
	var id = document.getElementById("idselect").value;
	if(id!==null)
	{
		$.ajax({
			type:"DELETE",
			url:"https://webtechcars.herokuapp.com/api/cars/"+id,
			headers: {
				"Access-Control-Allow-Origin": "*"
			},
			success: function() {
				alert("Car successfully removed");
				location.reload();
			},
			error: function() {
				alert("Error while deleting car");
			}
		});
		const formdata = JSON.stringify({
			"name": document.getElementsByName("carname")[0].value,
			"consumption": document.getElementsByName("carconsumption")[0].value,
			"color": document.getElementsByName("carcolor")[0].value,
			"manufacturer": document.getElementsByName("carmanufacturer")[0].value,
			"avaiable": document.getElementsByName("caravailable")[0].value,
			"year": document.getElementsByName("caryear")[0].value,
			"horsepower": document.getElementsByName("carhorsepower")[0].value
		});
		console.log(formdata);
		$.ajax({
			type:"POST",
			url:"https://webtechcars.herokuapp.com/api/cars/",
			headers: {
				"Access-Control-Allow-Origin": "*"
			},
			data: formdata,
			contentType:"application/json",
			success: function() {
				alert("Car successfully edited");
				location.reload();
			},
			error: function() {
				alert("Error on editing car");
			}
		});
	}
	else
	{
		alert('ID is undefined');
	}
}
