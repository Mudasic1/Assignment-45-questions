// 30.Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are 
// writing code that will print a greeting to each user after they log in to a website. Loop through the array, 
// and print a greeting to each user:
let users : string[] = ["admin","Muzamil","Mudasir","Mubashir","Zubair"];
for(let user of users){
    if(user === "admin")
    {
        console.log("Hello admin, would you want to see a status report?");
    }
    // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
    else{
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
}