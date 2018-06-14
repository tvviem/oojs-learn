// Define a class
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(this.email, 'just logged in');
        return this;
    }
    logout() {
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore() {
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}
// create user objects
var user1 = new User('tvviem@blu.edu.vn', 'Viem Trieu');
var user2 = new User('doublefire@gmail.com', 'viem');

user1.updateScore().login();