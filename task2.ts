// 3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
// uppercase, and titlecase
let personName : string = "Mudasir";
// lowercase
console.log(`lowercase: ${personName.toLowerCase()}`)
// UpperCase
console.log(`Uppercase: ${personName.toUpperCase()}`)
// titleCase
console.log(`Titlecase: ${personName.charAt(0).toUpperCase()}${personName.slice(1).toLowerCase()}`);