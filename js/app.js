$(function() {

  	$("#dateiss").daterangepicker({
    	singleDatePicker: true,
    	showDropdowns: true,
    	minYear: 1901,
    	maxYear: parseInt(moment().format('YYYY'),10),
    	locale: {
         format: 'DD-MM-YYYY'
      },
      autoUpdateInput: false
  	});


  	$("#dateiss").on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('DD-MM-YYYY'));
  	});


  	$("#form").submit(function(e){
		
  		e.preventDefault();
		  var dateiss = $("#date").val();
			const currentDate = new Date(dateiss);
			const timestamp = (currentDate.getTime()/1000);

			var durationInMinutes10 = 10;
			var durationInMinutes70 = 70;
			
			currentDate.setMinutes(currentDate.getMinutes() - durationInMinutes10);
			const timesbefore10 = (currentDate.getTime()/1000);

			currentDate.setMinutes(currentDate.getMinutes() - durationInMinutes10);
			const timesbefore20 = (currentDate.getTime()/1000);

			currentDate.setMinutes(currentDate.getMinutes() - durationInMinutes10);
			const timesbefore30 = (currentDate.getTime()/1000);

			currentDate.setMinutes(currentDate.getMinutes() - durationInMinutes10);
			const timesbefore40 = (currentDate.getTime()/1000);

			currentDate.setMinutes(currentDate.getMinutes() - durationInMinutes10);
			const timesbefore50 = (currentDate.getTime()/1000);

			currentDate.setMinutes(currentDate.getMinutes() - durationInMinutes10);
			const timesbefore60 = (currentDate.getTime()/1000);
			
			currentDate.setMinutes(currentDate.getMinutes() + (durationInMinutes70));
			const timesafter10 = (currentDate.getTime()/1000);

			currentDate.setMinutes(currentDate.getMinutes() + durationInMinutes10);
			const timesafter20 = (currentDate.getTime()/1000);

			currentDate.setMinutes(currentDate.getMinutes() + durationInMinutes10);
			const timesafter30 = (currentDate.getTime()/1000);

			currentDate.setMinutes(currentDate.getMinutes() + durationInMinutes10);
			const timesafter40 = (currentDate.getTime()/1000);

			currentDate.setMinutes(currentDate.getMinutes() + durationInMinutes10);
			const timesafter50 = (currentDate.getTime()/1000);

			currentDate.setMinutes(currentDate.getMinutes() + durationInMinutes10);
			const timesafter60 =(currentDate.getTime()/1000);
		
			
		  $.ajax({
			type: "GET",
			url: 'https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps='+timesbefore60+','+timesbefore50+','+timesbefore40+','+timesbefore30+','+timesbefore20+','+timesbefore10+','+timestamp+','+timesafter10+','+timesafter20+','+timesafter30+','+timesafter40+','+timesafter50+','+timesafter60+'&units=miles',
			dataType: "json",
			success: function (data) {
				for(var i=0;i<data.length;i++)
				{
					var longitude = data[i].longitude;
					var latitude = data[i].latitude;
					var utc = tzlookup(latitude,longitude);
					var date = new Date(data[i].timestamp * 1000);
			
					
					var timeTi="<h4>"+date+"</h4>";
					var locationUTC="<p>"+utc+"</p>";
					var visi="<p>"+data[i].visibility+"</p><br>";

				 	$("#output").append(timeTi+ locationUTC+ visi); 
			
				}   
				
			},
			error: function() {
				console.log("error");
			 }
			
		});

		$.ajax({
			type: "GET",
			url: 'http://api.open-notify.org/astros.json',
			dataType: "json",
			success: function (data) {
				for(var i=0;i<data.length;i++)
				{
					var person = data[i].people;
					
					var names="<p>"+person+"</p>";

				 	$("#name").append(names); 
			
				}   
			},
			error: function() {
				console.log("error");
			 }
		});


  	});
});