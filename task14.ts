// 15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to 
// send out a new set of invitations. You’ll have to think of someone else to invite.
let Guest : string[] = ["Muzamil","Mudasir","Mubashir","Zubair"];
console.log(Guest)
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating 
// the name of the guest who can’t make it.
let canNot_Attend : string = "Mudasir";
console.log(`${canNot_Attend} do not want to attend dinner. `)
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person 
// you are inviting.
let new_Guest : string = "Masood";
Guest[Guest.indexOf(canNot_Attend)] = new_Guest;
console.log(Guest);
Guest.map((items)=> console.log(`Dear ${items} you are invited at thr dinner.`));
