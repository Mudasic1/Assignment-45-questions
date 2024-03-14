// 15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to 
// send out a new set of invitations. You’ll have to think of someone else to invite.
var Guest = ["Muzamil", "Mudasir", "Mubashir", "Zubair"];
console.log(Guest);
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating 
// the name of the guest who can’t make it.
var canNot_Attend = "Mudasir";
console.log("".concat(canNot_Attend, " do not want to attend dinner. "));
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person 
// you are inviting.
var new_Guest = "Masood";
Guest[Guest.indexOf(canNot_Attend)] = new_Guest;
console.log(Guest);
Guest.map(function (items) { return console.log("Dear ".concat(items, " you are invited at thr dinner.")); });
