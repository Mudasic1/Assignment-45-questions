// 17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the 
// dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
// invite only two people for dinner.
var Guest = ["Ali", "Muzamil", "Mudasir", "Mubashir", "Zubair", "Masood", "saeed", "Zain"];
console.log("Dear ".concat(Guest, ", I have space of only two guest on the dinner."));
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop 
// a name from your list, print a message to that person letting them know you’re sorry you can’t invite 
// them to dinner.
while (Guest.length > 2) {
    Guest.pop();
    Guest.map(function (items) { return console.log("Sorry ".concat(Guest, ", you are no longer invited on the dinner.")); });
}
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
Guest.map(function (items) { return console.log("Dear ".concat(Guest, ", you are still invited at the dinner.")); });
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
// actually have an empty list at the end of your program.
Guest.pop();
Guest.pop();
console.log(Guest);
