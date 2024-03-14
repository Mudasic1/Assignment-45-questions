"use strict";
// 24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to 
// try more comparisons, write more tests. Have at least one True and one False result for each of the 
// following:
Object.defineProperty(exports, "__esModule", { value: true });
// • Tests for equality and inequality with strings
var name1 = 'Mudasir';
var name2 = 'Muhammad Mudasir';
var name3 = 'Muhammad Mudasir Chandio';
if (name1 !== name2) {
    console.log('Correct');
}
else {
    console.log('Wrong');
}
if (name2 == name3) {
    console.log('Correct');
}
else {
    console.log('Wrong');
}
// • Tests using the lower case function
if (name1.toLowerCase() == name2.toLowerCase()) {
    console.log('Correct');
}
else {
    console.log('Wrong');
}
if (name1.toLowerCase() !== name3.toLowerCase()) {
    console.log('Correct');
}
else {
    console.log('Wrong');
}
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
// and less than or equal to
var marks = 23;
if (marks == 23) {
    console.log('Pass');
}
else {
    console.log('Not found');
}
if (marks !== 23) {
    console.log('fail');
}
else {
    console.log('Not found');
}
if (marks > 23) {
    console.log('Good Marks');
}
else {
    console.log('Not found');
}
if (marks < 23) {
    console.log('fail');
}
else {
    console.log('Not found');
}
if (marks >= 23) {
    console.log('Good Marks');
}
else {
    console.log('Not found');
}
if (marks <= 23) {
    console.log('fail');
}
else {
    console.log('Not found');
}
// • Tests using "and" and "or" operators
var num1 = 24;
var num2 = 25;
if (num1 == 24 && num2 == 25) {
    console.log('Correct');
}
else {
    console.log('Wrong');
}
if (num1 !== 24 || num2 !== 25) {
    console.log('Correct');
}
else {
    console.log('Wrong');
}
var city = ['Karachi', 'Hyderabad', 'Jamshoro'];
// Test whether an item is in the array
if (city.indexOf('Karachi') !== -1) {
    console.log('Karachi is in the cities list');
}
else {
    console.log('Karachi is not in the cities list');
}
// Test whether an item is not in the array
if (city.indexOf('KN Shah') !== -1) {
    console.log('KN Shah is in the cities list');
}
else {
    console.log('KN Shah is not in the cities list');
}
