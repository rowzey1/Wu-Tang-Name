const maleNames = ["Mystic","Shadow", "Iron", "Golden","Avalanche","Rogue","Fearless", "Mighty", ];
const femaleNames = ["Silent","Divine", "Scarlet", "Majestic","Siren","Tempest","Blazing", "Fierce", ];
const neutralNames = ["Infinite","Zen","Phoenix","Mysterious","Shadow", "Rebel", "Celestial",];1

const ageAdjectives = ["Ancient", "Young", "Wise", "Bold"];
const locationInfluence = {
                            "New York": "Artistic",
                            "Los Angeles": "Creative",
                            "Chicago": "Windy",
                            "Texas": "Brave",
                            "Florida": "Free",
                            "Las Vegas":"Fun"
};  

const generalNouns = ["Warrior","Master", "Ninja", "Destroyer", "Monk","Nomad","Dragon",
    "Titan","Thunder", "Ghost", "Samurai", "Fury","Inferno"];

document.getElementById("idForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = parseInt(document.getElementById("age").value);
    const location = document.getElementById("location").value;
    const gender = document.getElementById("gender").value;

    //condition for gender
    let adjectiveList;
    if (gender === "male") {
        adjectiveList = maleNames;
    } else if (gender === "female") {
        adjectiveList = femaleNames;
    } else {
        adjectiveList = neutralNames;
    }

    //condition for first name
    const firstLetter = firstName.charAt(0).toUpperCase();
    if (['A', 'E', 'I', 'O', 'U'].includes(firstLetter)) {
        adjectiveList.push("Eternal", "Immortal", "Ultimate");
    } else if (['B', 'C', 'D'].includes(firstLetter)) {
        adjectiveList.push("Dark", "Deadly", "Divine");
    } else if (['M', 'N', 'P'].includes(firstLetter)) {
        adjectiveList.push("Mystic", "Noble", "Powerful");
    } else {
        adjectiveList.push("Supreme", "Legendary", "Elite");
    }

    // condition for last name
    if (lastName.length <= 4) {
        adjectiveList.push("Swift", "Quick");
    } else if (lastName.length >= 8) {
        adjectiveList.push("Magnificent", "Unstoppable");
    }

   
    
    //condition for age
    if (age < 20) {
        adjectiveList.push("Young","Curious", "Lively","Childish");
    } else if (age >= 20 && age < 40) {
        adjectiveList.push("Fierce","Booming", "Dynamic","Creative");
    } else {
        adjectiveList.push("Wise","Sensible", "Ancient","Thoughtful");
    }

    // condition for location 
    let locationAdjective = locationInfluence[location.charAt(0).toUpperCase() + location.slice(1).toLowerCase()] || " ";

    // get Wu-Tang inspired name using the chosen adjective list
    const adjective = adjectiveList[Math.floor(Math.random() * adjectiveList.length)];
    const noun = generalNouns[Math.floor(Math.random() * generalNouns.length)];

    const wuTangName = `${locationAdjective} ${adjective} ${noun}`;

    document.getElementById("result").textContent = `Your Wu-Tang Clan name is: ${wuTangName}`
});