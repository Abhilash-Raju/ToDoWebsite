//  retrieve the daily tasks (to-do lists) from the API (https://jsonplaceholder.typicode.com/todos) 
$(document).ready(function(){    
	var mybutton =document.getElementById('load');
	var refbutton =document.getElementById('ref');
    mybutton.onclick =()=>{

	var request;
	if (window.XMLHttpRequest) {
		request = new XMLHttpRequest();
	} else {
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}
	request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
	request.onreadystatechange = function() {
		if ((request.readyState===4) && (request.status===200)) {
			var items = JSON.parse(request.responseText);
			var output = '';
            for (var key in items) {
                if (items[key].completed ==true){
                output += '<input type="checkbox"  class="inp" name="check" checked disabled="disabled">' + items[key].title + '</input>' +'<br>';
                }
                output += '<input type="checkbox" class="inp" name="uncheck[]">' + items[key].title + '</input>' +'<br>';

				document.getElementById('update').innerHTML = output;
            }
		}

		$('#update input:checkbox').on("change", function() {
			var len = $('#update input[name="uncheck[]"]:checked').length;
			if(len<5){
				$("#general i .counter").text(' '+len+'');
				console.log("Counter");
				}
			else if (len=5){
				$("#general i .counter").text(' '+len+'');
				$('#complete').text('5 Tasks have been Completed for Today.');
				alert('Congrats. 5 Tasks have been Successfully Completed');
				window.setTimeout( ()=> {
					window.location.reload();
				  }, 1500);
			}
			else{
				$("#general i .counter").text(' ');}
			});
	}

	request.send();
	refbutton.onclick =()=>{
		location.reload();;
	}
}
}
);