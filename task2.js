// 3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
// uppercase, and titlecase
var personName = "Mudasir";
// lowercase
console.log("lowercase: ".concat(personName.toLowerCase()));
// UpperCase
console.log("Uppercase: ".concat(personName.toUpperCase()));
// titleCase
console.log("Titlecase: ".concat(personName.charAt(0).toUpperCase()).concat(personName.slice(1).toLowerCase()));
