var formattedName;
var formattedRole;

formattedName = HTMLheaderName.replace("%data%","Kevin Briggs");
formattedRole = HTMLheaderRole.replace("%data%","Teacher");


var bio = {
	name:"Kevin",
	role: "teacher",
	contact: "kevin@gmail.com"
};


var work = {
	position: "Technology",
	employer: "Bancroft",
	years: 3
};

var education = {
	name: "La Salle",
	years: 4,
	city: "Philadelphia"
};


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#main").append(bio.name);
$("#main").append(work["position"]);
$("#main").append(education.name);



