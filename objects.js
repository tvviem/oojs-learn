// Define a class
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}
User.prototype.login = function() {
    this.online = true;
    console.log(this.email, 'has logged in');
}
User.prototype.logout = function() {
    this.online = false;
    console.log(this.email, 'has logged out');
}
function Admin(...args) {
    // call constructor User to indentify attributes
    User.apply(this, args);
    this.role = 'super admin';
}
// Inheritance all prototype from User
// Su dung prototype gian tiep tu user
Admin.prototype = Object.create(User.prototype);

// New prototype for admin object
Admin.prototype.deleteUser = function(u) {
    users = users.filter(user => {
        return user.email != u.email;
    });
};
// create user objects
var user1 = new User('tvviem@blu.edu.vn', 'Viem Trieu');
var user2 = new User('doublefire@gmail.com', 'tvviem');
var admin = new Admin('admin-df@gmail.com', 'double fire');

var users = [user1, user2, admin];
console.log(admin);