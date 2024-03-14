// 16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three 
// more guests to invite to dinner
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing 
// people that you found a bigger dinner table.
var Guest = ["Muzamil", "Mudasir", "Mubashir", "Zubair"];
console.log(Guest);
var canNot_Attend = "Mudasir";
var new_Guest = "Masood";
Guest[(Guest.indexOf(canNot_Attend))] = new_Guest;
console.log(Guest);
// • Add one new guest to the beginning of your array.
var begGust = "Ali";
Guest.unshift(begGust);
// • Add one new guest to the middle of your array. 
var middleGuest = "saeed";
var middleIndex = middleGuest.length / 3;
Guest.splice(middleIndex, 0, middleGuest);
// • Use append() to add one new guest to the end of your list.
Guest.push("Zain");
console.log(Guest);
// • Print a new set of invitation messages, one for each person in your list.
Guest.map(function (items) { return console.log("Dear ".concat(items, ", I found a bigger dinner table so I want to invite more people.")); });
