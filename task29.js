// 30.Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are 
// writing code that will print a greeting to each user after they log in to a website. Loop through the array, 
// and print a greeting to each user:
var users = ["admin", "Muzamil", "Mudasir", "Mubashir", "Zubair"];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
    if (user === "admin") {
        console.log("Hello admin, would you want to see a status report?");
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in again."));
    }
}
