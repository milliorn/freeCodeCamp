var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.name = firstName + ' ' + lastName;
    }
    User.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    User.maxAge = 40;
    return User;
}());
var user = new User("Monster", "lessons");
