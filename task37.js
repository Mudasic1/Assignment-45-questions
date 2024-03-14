// 38.Cities: Write a function called describe_city() that accepts the name of a city and its country. The 
// function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the 
// country a default value. Call your function for three different cities, at least one of which is not in the 
// default country.
function describe_city(name, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(name, " is in ").concat(country));
}
describe_city("Karachi"); //default sentence
describe_city('france', 'europe');
describe_city("Lahore", "Punjab");
