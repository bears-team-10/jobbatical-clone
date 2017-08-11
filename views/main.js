'use strict';

// counter for new jobs
var counter = 0;

$.getJSON('/all-jobs', function(response){
	let featuredJobs = document.getElementById('featuredJobs');

	// insert new positions
	response.forEach(function(element) {
        if (element.jobTitle && element.location){
            featuredJobs.innerHTML = featuredJobs.innerHTML +
            "<div class='col-md-4 feature-card'> <img src='chingu.jpg' class='img-responsive'>" + 
            "<h4 class='job-title'>" + element.jobTitle + "</h4>" + 
            "<p class='text-uppercase text-faded'>" + element.location + "</p>" + 
            "</div>"
		  //  "<p id=job" + (++counter) + ">" + element.location + "</p>";	
        }	

                  
                   // </div>


	});
});
