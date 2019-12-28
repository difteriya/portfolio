function createNewUser(){
    let name = prompt("Please Enter Name:", "");
    let surname = prompt("Please Enter Surname", "");

    let newUser = {
        firstName: name,
        lastName: surname,

        getLogin(){
            return (this.firstName.charAt(0) + this.lastName.toLowerCase());
        }
    };

    return newUser;
}

let n = createNewUser();
console.log(n.getLogin());