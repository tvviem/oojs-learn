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

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            // return object user not like user.email
            return u.email!=user.email;
        });
    }
}
// create user objects
var user1 = new User('tvviem@blu.edu.vn', 'Viem Trieu');
var user2 = new User('doublefire@gmail.com', 'viem');
var admin = new Admin('admin-df@gmail.com', 'doublefire');

var users = [user1, user2, admin];
admin.deleteUser(user1);
admin.login().logout();
console.log(users);

function Item(id, itemname, unit) {
    this.id = id;
    this.itemname = itemname;
    this.unit = unit;
    /* this.show = function() {
        console.log(this.itemname, '||', this.unit);
    } */
}
// Su dung prototype cho phep su dung hieu qua doi tuong
Item.prototype.show = function() {
    console.log(this.itemname, ' | ', this.unit);
}
var itemObj = new Item(1, 'Bột giặt', 'thùng');
var itemObj2 = new Item(2, 'Nước mắm', 'lít');