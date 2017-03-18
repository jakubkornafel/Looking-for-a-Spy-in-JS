var first_name = prompt("Please enter your first name.")
var last_name = prompt("Please enter your last name.")
var age = prompt("How old are you?")
var height = prompt("Tell us how tall are you in centimeters.")
var pet_name = prompt("What is your pet's name?")
alert("Thank you for all information.")

if ((first_name.charAt(0) == last_name.charAt(0)) && (20 < age < 30) && (height > 169) && (pet_name.endsWith("y"))){
  // console.log("First letters ok.");
  // console.log(" and age ok.");
  // console.log(" and height ok.");
  // console.log(" and pet's name ok.");
  console.log("Welcome comrade!");
} else {
  console.log("Nothing to see here.");
}
