// $("#main").append("Daniel Lee");

// var awesomeThoughts = "I am Daniel and I am AWESOME!";
// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// $('#main').append(funThoughts);

// var formattedName = HTMLheaderName.replace("%data%", "Daniel Lee");
// var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

var bio = {
	"name": "Daniel Lee",
	"age": 24,
	"role": "Web Developer",
	"contacts": {
		"mobile": '(000) 000-0000',
		"email": 'cooldude@email.com',
		'twitter': '@cooldude',
		'github': "github.com/cooldude",
		'blog': "blog.com/cooldude",
		'location': "Los Angeles, CA"
	},
	"picture": "images/fry.jpg",
	"message": "Hi",
	"skills": ['awesomeness', 42, 'shapeshifting', 'saving the world']
}

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var email = HTMLemail.replace("%data%", bio.contacts.email);
	var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var github = HTMLgithub.replace("%data%", bio.contacts.github);
	var blog = HTMLblog.replace("%data%", bio.contacts.blog);
	var location = HTMLlocation.replace("%data%", bio.contacts.location);
	var contactArr = [];
	contactArr.push(mobile, email, twitter, github, blog, location);
	var contactsFunc = function(contact) {
		$("#topContacts").append(contact);
	}
	for (contactType in contactArr) {
		contactsFunc(contactArr[contactType]);
	}
	// $("#topContacts").append(mobile);
	// $("#topContacts").append(email);
	// $("#topContacts").append(twitter);
	// $("#topContacts").append(github);
	// $("#topContacts").append(blog);
	// $("#topContacts").append(location);
	var picture = HTMLbioPic.replace("%data%", bio.picture);
	$("#header").append(picture);
	var message = HTMLWelcomeMsg.replace("%data%", bio.message);
	$("#header").append(message);
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
	}
}



bio.display();

// if (bio.skills.length > 0) {
// 	$("#header").append(HTMLskillsStart);
// 	$("#skills").append(HTMLskills.replace("%data%", bio.skills[0]));
// 	$("#skills").append(HTMLskills.replace("%data%", bio.skills[1]));

// }

// $('#main').append(bio.name);

var work = {
	"jobs": [{
		"employer": "The League",
		"title": "Co-Commissioner",
		"location": "Chicago",
		"dates": "Fall 2014 to present",
		"description": "Maintaining a great league"
	},
	{
		"employer": "MIB",
		"title": "classified",
		"location": "New York",
		"dates": "classified",
		"description": "classified"
	}]
}

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);  	
	}
}

work.display();

var projects = {
	"projects": [{
		"title": "SimplePage",
		"dates": "not too long ago",
		"description": "Look at title name",
		"images": ["http://placehold.it/350x150", "http://placehold.it/350x150"]
	},
	{
		"title": "Resume",
		"dates": "right now",
		"description": "It's the project you're looking at right now. Woah",
		"images": ["http://placehold.it/350x150", "http://placehold.it/350x150"]
	}]
}

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var projTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(projTitle);
		var projDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(projDates);
		var projDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(projDesc);
		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var projImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(projImage);
			}
		}
	}
}

projects.display();

var education = {
	"schools": [{
		"name": "UofC",
		"degree": "B.A.",
		"dates": "2008-2012",
		"location": "Chicago, IL",
		"majors": ["Economics", "Psychology"]
	},
	{
		"name": "SoD",
		"degree": "Unofficial",
		"dates": "January 2015 cohort",
		"location": "Newport Beach, CA",
		"majors": ["Web-Immersive", "Bootcamp"]
	}],
	"online-classes": [{
		"name": "Coursera",
		"classes": ["Introduction to Python", "Machine Learning"],
		"dates": "Fall 2014",
		"url": "https://www.coursera.org/"
	},
	{
		"name": "Udacity",
		"classes": ["Introduction to Git and Github", "Intro to HTML and CSS", "Javascript Basics"],
		"dates": "Early 2015",
		"url": "https://www.udacity.com/"
	}]
}

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(schoolName + schoolDegree);
		var schoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(schoolDates);
		var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(schoolLocation);
		for (major in education.schools[school].majors) {
			var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
			$(".education-entry:last").append(schoolMajor);
		}
	}
	$("#education").append(HTMLonlineClasses);
	for (school in education["online-classes"]) {
		for (course in education["online-classes"][school].classes) {
			$("#education").append(HTMLschoolStart);
			var onlineTitle = HTMLonlineTitle.replace("%data%", education["online-classes"][school].classes[course]);
			var onlineSchool = HTMLonlineSchool.replace("%data%", education["online-classes"][school].name);
			$(".education-entry:last").append(onlineTitle + onlineSchool);
			var onlineDates = HTMLonlineDates.replace("%data%", education["online-classes"][school].dates);
			$(".education-entry:last").append(onlineDates);
			var onlineURL = HTMLonlineURL.replace("%data%", education["online-classes"][school].url);
			$(".education-entry:last").append(onlineURL);
		}
	}
}

education.display();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

$("#main").append(internationalizeButton);


$("#mapDiv").append(googleMap);




// var inName = function(name) {
// 	var nameArr = name.trim().split(' ');
// 	var name1 = nameArr[0].slice(0,1).toUpperCase() + nameArr[0].slice(1).toLowerCase();
// 	var name2 = nameArr[1].toUpperCase();
// 	var fullName = name1 + " " + name2;
// 	console.log(fullName);
// 	return fullName;
// }

// inName("  daniel lee");

// function foo() {
// 	var x = 1;
// 	if (x) {
// 		var func = function () {
// 			var x = 2;
// 			console.log(x);
// 		};
// 		func();
// 	}
// 	console.log(x);
// }

// foo(); 

// function foo() {
// 	var x = 1;
// 	if (x) {
// 		(function () {
// 			var x = 2;
// 			console.log(x);
// 		}());
// 	}
// 	console.log(x);
// }

// foo(); //this is an anonymous function version of the call above

