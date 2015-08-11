var name = "Chelsea J. Schaefer";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var bio = {
	"name" : "Chelsea Schaefer",
	"role" : "Web Developer",
	"contacts" : {
		"cell" : "508-797-2424",
		"email" : "chelseajoyschaefer@gmail.com",
		"github" : "chelsea2point0",
		"twitter" : "@chels_schaefer",
		"location" : "Manchester, NH"
	},
	"welcomeMessage" : "Thank you for visiting my resume. I look forward to speaking with you soon.",
	"skills" : [
		"HTML/CSS", " JavaScript", " Training", "Customer Service", "Attention to Detail"
		],
	"bioPic" : "images/washington.jpg"
};

var education = {
	"schools": [
	{
		"name": "Nashua Community College",
		"city": "Nashua, NH",
		"degree": "Certificate",
		"major": "Internet Application Development",
		"dates": "September 2015 - December 2015",
		"url": "http://www.nashuacc.edu"
	},
	{
		"name": "Assumption College",
		"city": "Worcester, MA",
		"degree": "Master of Arts",
		"major": "School Counseling",
		"dates": "September 2010 - May 2012",
		"url": "http://www.assumption.edu"
	},
	{
		"name": "University of New Hampshire",
		"city": "Durham, NH",
		"degree": "Bachelor of Arts",
		"major": "Psychology",
		"dates": "September 2006 - May 2010",
		"url": "http://www.unh.edu"
	}
	]
};

var work = {
	"jobs": [
	{
		"employer": "REB/PAC Business Products",
		"title": "Web Developer",
		"dates": "July 2015 - Present",
		"location": "Weare, NH",
		"description": "Hired on contractual basis to update client's webpage. Recycled original webpage content but created a more visually appealing, user-friendly version using HTML, CSS, bootstrap and jQuery."
	},
	{
		"employer": "Southern New Hampshire University",
		"title": "Lead Training Manager",
		"dates": "September 2014 - June 2015",
		"location": "Manchester, NH",
		"description": "Responsible for managing a team of 5 Training Managers and 1 Quality Assurance Manager for the Academic Advising staff. Designed, developed, and updated training manuals and job aids for both new and current Academic Advisors."
	},
	{
		"employer": "Southern New Hampshire University",
		"title": "Training Manager",
		"dates": "July 2013 - August 2014",
		"location": "Manchester, NH",
		"description": "Responsible for design and delivery of onboarding training to all Academic Advising staff. Collaborated with leadership team to ensure that training topics and methods aligned with department goals. Also maintained training materials and created training videos."	
	},	
	{
		"employer": "Southern New Hampshire University",
		"title": "Academic Advisor",
		"dates": "June 2012 - July 2013",
		"location": "Manchester, NH",
		"description": "Provided Academic Advising services to new students within Liberal Arts undergraduate degree programs. Recommended and registered students for courses based upon degree requirements. Assisted with study skills and connecting students with academic resources for success."
	}
	]
};

var projects = {
	"projects": [
	{
		"title": "REB/PAC Business Products webpage",
		"dates": "July - August 2015",
		"description": "Used HTML/CSS, bootstrap framework and jQuery library to update client's webpage in order to create a better user experience and attract new customers",
		"images": [
			"/images.homepage.PNG",
			"/images.contactpage.PNG"
		]
	},
	{
		"title": "Innovation Cloud",
		"dates": "July 2015",
		"description": "Project from Codecademy.com. Mock business homepage that incorporates HTML/CSS, JavaScript and jQuery.",
		"images": [
			"/images.innovationcloudheader.PNG",
			"/images.innovationcloud.PNG"
		]
	}
	]

};

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for (var i=0; i < bio.skills.length; i++) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkills);
	}
};

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);
}
/*
for (var i=0; i < work.length; i++) {
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.employer[i]);
	$(".work-entry:last").append(formattedEmployer);
};
*/

