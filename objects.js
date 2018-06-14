var userOne = {
    email: 'trieuvinhviem@gmail.com',
    name: 'Trieu vinh viem',
    login: function() {
        console.log(this.email, 'has logged in');
    },
    logout: function() {
        console.log(this.email, 'has logged out');
    }
};

console.log(userOne.name);
