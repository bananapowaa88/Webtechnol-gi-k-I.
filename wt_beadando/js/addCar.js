$(document).ready(function (){
	$.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function(data) {
		 var select = $("#manufacturerselect");
		 $.each(data,function(index,manufacturer) {
			 var options = $('<option value="'+manufacturer.name+'">'+manufacturer.name+'</option>');
			 $(select).append(options);
		 })
	 })
});
function addCar() {
	event.preventDefault();
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
		url:"https://webtechcars.herokuapp.com/api/cars",
		headers: {
			"Access-Control-Allow-Origin": "*"
		},
		data: formdata,
		contentType:"application/json",
		success: function() {
			alert("New car successfully added");
			location.reload();
		},
		error: function() {
			alert("Error for adding new car");
		}
	});
}
$(document).ready(function () {
	$(".headerdivpin").text("Add new car");
});
