// 18.Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let places : string[] = ["Russia", "Japan", "Pakistan", "United Kingdom", "China"];
// • Print your array in its original order
console.log(places);
// • Show that your array is still in its original order by printing it.
console.log("original order: ",places);
// • Print your array in alphabetical order without modifying the actual list.
console.log("alphabetical order: ",[...places].sort());
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetical order: ",[...places].sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log("original order after sorting: ",places);
// • Reverse the order of your list. Print the array to show that its order has changed.
places.reverse()
console.log("reverse order after: ",places);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been 
// changed.

places.sort()
console.log("alphabetical order",places);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its 
// order has changed.
places.sort().reverse()
console.log("reverse alphabetical order",places);
