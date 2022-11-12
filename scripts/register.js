//object literal notation 
let petSalon = {
    //properties
    name: "The Fashion Pet",
    address: { //object within address
        street:"University",
        number:"262",
        zip: "22400"
    },
    pets:[]
}


//create the constructor(add parameters (local vars)
function Pet(name, age, gender, breed,service,owner,phone) {
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.ownerName=owner;
    this.contactPhone=phone; 
}

//create pets
    let pet1 = new Pet("scooby",60,"male","Dane","Grooming","Shaggy","555-555-2334");
    let pet2 = new Pet("Thunder",10,"female","German Shepherd","Nail","Alex","123-325-2334");

    //register function 
    //get the inputs
    let inputName = document.getElementById("txtName");
    let inputAge = document.getElementById("txtAge");
    let inputGender = document.getElementById("txtGender");
    let inputBreed = document.getElementById("txtBreed");
    let inputService =document.getElementById("selService");
    let inputOwner = document.getElementById("txtOwner");
    let inputContact = document.getElementById("txtContact");

function register() {
    // #1.Get the input values (tested with console to check if it works and deleted once it works. and incorporated into creating object)
    // #2. create object with values customer inputted
    let thePet = new Pet(
    //getting values and creating the obj
    inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputContact.value);
    //display the obj
    console.log(thePet);
    // push Object into the array
    petSalon.pets.push(thePet);
    // display the Object petSalon.pets array
    console.log(petSalon.pets);
    clearForm();
}

function clearForm() {
    //clearing the text in the inputs
    inputName.value = "";
    inputAge.value = "";
    inputGender.value = "";
    inputBreed.value = "";
    inputService.value = "";
    inputOwner.value = "";
    inputContact.value = "";
}

function init() {
    //this is the main function
    petSalon.pets.push(pet1,pet2);
}

window.onload = init;








// function displayNames(){
//     //alert to display the length
//     //display the names
//         //*** use a for loop *** 
// }




// document.getElementById("result").innerHTML = "Here is what you have entered: " + ;


