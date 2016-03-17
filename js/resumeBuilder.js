/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append('Gerru Kloppers');
var name = "Gerru Kloppers";
var role = "Data Analyst";


var fname = HTMLheaderName.replace("%data%", name);
var frole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(frole);
$("#header").prepend(fname);

var bio = {
    "name": "Gerru Kloppers",
    "role": "Data Analyst",
    "contacs": {
        "email": "gkloppers@gmail.com",
        "city": "Berlin",
        "phone": "0123455676789"
    },
    "mypic": "images/fry.jpg",
    "skills": ["1", "2", "3"]
};

var work = {
    "employer": "idealo",
    "position": "Content Manager"
};

var education = {
    "schools": [
        {
            "name": "Univarsity of Pretoria",
            "city": "Pretoria",
            "course": "B.IS. Information and Knowledge Management"
        },
        {
            "name": "Coursera",
            "city": "Online",
            "course": "Data Science"            
        }
        ]
    
}

//$("#main").append(bio.contacs.city);
//$("#main").append(bio.work.position);
//$("#main").append(bio.education);