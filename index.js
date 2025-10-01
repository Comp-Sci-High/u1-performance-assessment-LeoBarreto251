// 1st Floor
let gymatoriumLock = true;
gymatoriumLock = false;

// Commit and show us to unlock the next floor's instructions
// ----------------------------
// 2nd Floor
// Do not modify these arrays directly
let weworkItems = ["loaner laptop", "whiteboard", "conference room", "couch", "printer", "shared table", "Wi-Fi router", "plants", "office chair", "power outlets"];
let computerLabItems = ["desktop computers", "monitors", "broken laptop", "mice", "Wi-Fi router", "printer", "power strips", "headphones", "USB drives", "chairs", "desks"];
let mprItems = ["mirrors", "speakers", "chairs", "portable stereo", "projector", "chairs", "posters"];


let item = weworkItems.shift();
computerLabItems.push(item);
computerLabItems[2] = "fixed laptop";
let string1 = mprItems[0].length + "";
let string2 = mprItems[1].length;
let string3 = mprItems[2].length;
let string4 = mprItems[3].length;
let string5 = mprItems[4].length;
let string6 = mprItems[5].length;
let string7 = mprItems[6].length;
console.log(string1+string2+string3+string4+string5+string6+string7)

// Commit and show us to unlock the next floor's instructions
// ----------------------------
// 3rd Floor
// Do not modify these objects directly
let scoreValues = {
    "S": "Self-awareness",
    "C": "Challenge",
    "O": "Organization",
    "R": "Resilience"
}

let afterSchoolClubs = {
    athletic: [
        {
            club: "Soccer Club",
            location: "St. Mary's Park"
        },
        {
            club: "Flag Football",
            location: "St. Mary's Park"
        },
        {
            club: "Volleyball",
            location: "Gymnatorium"
        }
    ],
    social: [
        {
            club: "Gaming Club",
            location: 305
        },
        {
            club: "Art Club",
            location: 417
        },
        {
            club: "Gardening Club",
            location: 311
        }     
    ]
}

scoreValues.C = "Consistency"
scoreValues.O = "Ownership"
scoreValues.E = "Excellence"

afterSchoolClubs.athletic[0].club = "British Football Club"
afterSchoolClubs.social[2].location = "Balcony"
console.log(afterSchoolClubs);
// Commit and show us to unlock the next floor's instructions
// ----------------------------
// 4th Floor
// Uncomment the code below to begin this task

  function takeCareOfPet(snacks, pets){ 
    if (snacks === "hotdogs" && pets > 10) {
        return "Raccoon has been appeased"
    } else {
        return "The raccoon bit you and you died of rabies."
    
}
 }
console.log(takeCareOfPet("hotdogs", 20));

// Commit and show us to unlock the next floor's instructions
// ----------------------------
// 5th Floor

function messanger(message){

let messages = [message,message,message,message,message];
return "Open sesame";
}
console.log(messanger("Hi there"))


// Commit and show us to unlock the next floor's instructions
