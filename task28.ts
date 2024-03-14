// 29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if 
// statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits : string[] = ["apple","banana","mango","cherry","grapes"];
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is 
// in your array, the if block should print a statement, such as You really like bananas!
if(favorite_fruits.indexOf("apple")){
    console.log("You realy like apples.");
}
if(favorite_fruits.indexOf("banana")){
    console.log("You really like bananas.");
}
if(favorite_fruits.indexOf("mango")){
    console.log("You really like mango.");
}
if(favorite_fruits.indexOf("cherry")){
    console.log("You really like cherries.");
}
if(favorite_fruits.indexOf("grapes")){
    console.log("You really like grapes.");
}
