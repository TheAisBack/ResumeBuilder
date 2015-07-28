var bio = {
	"name": "Alan Hekle",
	"role": "Front-End Ninjs",
	"contacts": {
		"mobile": "1 (204) 688-78**",
		"email": "alanhekle@hotmail.com",
		"github": "TheAisBack",
		"twitter": "@TheAisBack",
		"location": "Winnipeg, Manitoba, Canada"
	},
	"picture": "images/AlanHekle.jpg",
	"welcomeMessage": "Welcome to my Page. Enjoy!",
	"skills": ["Management Information Systems", "Java", "Finance", "Front-End Developer"]
};

var work = {
	"jobs": [
		{
			"employer": "TD Canada Trust",
			"title": "Financial Services Representative",
			"location": "Winnipeg, Manitoba, Canada",
			"dates": "December 2014 - Present",
			"description": "Helped individuals with their investments and credit products to maintain a healthly financial lifestyle" +
			"Recognized for high quality of work and ability to interact positively with customers" +
			"Increase profits with abilitiy to turn negaitive customer interation into selling opportunities"
		},
		{
			"employer": "Lovell Corporation",
			"title": "Financial Analyst (Volunteer Position)",
			"location": "Winnipeg, Manitoba, Canada",
			"dates": "January 2014 - June 2014",
			"description": "Review and analyze project feasibility, operations, and financial data." +
			"Perform industry and market research." +
			"Prepare pricing model and annual projections."
		},
		{
			"employer": "CanTalk Inc.",
			"title": "Recruiter",
			"location": "Winnipeg, Manitoba, Canada",
			"dates": "May 2013 - August 2013",
			"description": "Establish recruiting requirements by studying organization plans and objectives; meeting with managers to discuss needs." + 
			"Build applicant sources by researching and contacting community services, colleges, employment agencies, recruiters, media, and internet sites." +
			"Maintaining daily/ weekly/monthly reports such as interview status reports, closure reports & feedback reports."
		},
		{
			"employer": "Runbow Logistics & Technology Co., Ltd.",
			"title": "Logistics Assistant",
			"location": "Shanghai, China",
			"dates": "July 2012 - September 2012",
			"description": "Reviewed and analyzed western companies in the Chinese region." +
			"Oversaw presentations, and research papers for prospective clients." +
			"Completed a journalistic piece for Runbow’s monthly newsletter about my work experience." +
			"Improved client relationships by creating a webpage survey, which entailed Fortune 500 companies."
		}
	]
};

var education = {
	"schools": [
		{
			"name": "University of Manitoba",
			"location": "Winnipeg, Manitoba, Canada",
			"degree": "Bachelor Degree of Honours",
			"major": "Finance & Management Information Systems",
			"dates": "September 2010 - April 2014",
			"url": "www.universityofmanitoba.ca"
		},
		{
			"name": "Hong Kong University of Science and Technology",
			"location": "Hong Kong, China (SARS)",
			"degree": "Exchange Program",
			"major": "Exchange Program",
			"dates": "February 2012 - May 2012",
			"url": "www.hkust.com"
		},
		{
			"name": "Red River College",
			"location": "Winnipeg, Manitoba, Canada",
			"degree": "Business Administration Diploma",
			"major": "Business Administration",
			"dates": "September 2008 - April 2008",
			"url": "www.rrc.ca"
		}
	],
	"onlineCourses": [
		{ "school": "Udacity",
			"title": "JavaScript",
			"completed": "June 2015 - Present",
			"url": "https://www.udacity.com"
		},
		{ "school": "Udacity",
			"title": "Android Developer",
			"completed": "June 2015 - Present",
			"url": "https://www.udacity.com"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Spotify Clone",
			"datesWorked": "June 2015 - Present",
			"description": "Spotify Clone",
			"images": ["images/project1.png"],
			"url": "http://www.cherylcourt.ca/frogger"
		}
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			var formattedEmployerWorkTitle = formattedEmployer + formattedTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescription);
		}

	}

}

displayWork();

projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjTitle);
			$(".project-entry:last").append(formattedProjDates);
			$(".project-entry:last").append(formattedProjDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			

		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
}

education.display();

$("#mapDiv").append(googleMap);