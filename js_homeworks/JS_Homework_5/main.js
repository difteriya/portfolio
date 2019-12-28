function createNewUser(){
    let name = prompt("Please Enter Name:", "");
    let surname = prompt("Please Enter Surname", "");
    let date_of_birth = prompt("Please Enter Date of Birth as dd.mm.yyyy");

    let newUser = {
        firstName: name,
        lastName: surname,
        birthday: date_of_birth,

        getLogin(){
            return (this.firstName.charAt(0) + this.lastName.toLowerCase());
        },

        getAge(){
            let date_parts = this.birthday.split(".");
            let birth = new Date( date_parts[2], date_parts[1] - 1, date_parts[0] );
            let today = new Date();
            return (today.getFullYear() - birth.getFullYear());
        },

        getPassword(){
            return (this.firstName.charAt(0).toUpperCase() + this.lastName.toLowerCase() + this.birthday.split(".")[2]);
        }
    };

    return newUser;
}

let n = createNewUser();
console.log(n.getPassword());
console.log(n.getAge());