let UserName = prompt("Please enter your name", "");
let UserAge = prompt("Please enter your age", "");

if (UserName == null || UserName == "" || isNaN(Number(UserAge)) || UserAge == "") {
     UserName = prompt("Please enter your name", UserName);
     UserAge = prompt("Please enter your age", UserAge);
}

if (UserAge < 18) {
alert("You are not allowed to visit this website");
}
else if (UserAge >=18 && UserAge < 22) {
    if (confirm("Are you sure you want to continue?") == true) {
        alert("Welcome " + UserName);
    } else {
        alert("You are not allowed to visit this website");
    }
} else {
    alert("Welcome " + UserName);
}
