// 32.Checking Usernames: Do the following to create a program that simulates how websites ensure that 
// everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let current_users : string[] = ["Muzamil","Mudasir","Mubashir","Zubair"];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames 
// are also in the current_users list.
let new_users : string[] = ["Masood","Zain","Mohammad Ali","Mudasir","Kamran"];
let current_users_lower : string[] = current_users.map(user => user.toLowerCase())
// • Loop through the new_users list to see if each new username has already been used. If it has, print a 
// message that the person will need to enter a new username. If a username has not been used, print a 
// message saying that the username is available.
for(let new_user of new_users){
if(current_users_lower.includes(new_user.toLowerCase())){
    console.log(`Sorry ${new_user}, that name is taken`)
}else{
    console.log(`Yes ${new_user}, is still in available list.`)
}
}