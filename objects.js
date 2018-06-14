// Define a class
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
    login() {
        console.log(this.email, 'just logged in');
    }
    logout() {
        console.log(this.email, 'just logged out');
    }
}
// create user objects
var user1 = new User('tvviem@blu.edu.vn', 'Viem Trieu');
var user2 = new User('doublefire@gmail.com', 'viem');
