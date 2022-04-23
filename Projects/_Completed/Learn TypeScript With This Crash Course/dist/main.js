var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var popularTags = ['dragon', 'coffee'];
var dragonsTag = "dragons";
var testStatus = {
    notStarted: 0,
    inProgress: 1,
    done: 2
};
var Status;
(function (Status) {
    Status[Status["NotStarted"] = 0] = "NotStarted";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done";
})(Status || (Status = {}));
var Statuses;
(function (Statuses) {
    Statuses["NotStarted"] = "Not Started";
    Statuses["InProgress"] = "In Progress";
    Statuses["Done"] = "Done";
})(Statuses || (Statuses = {}));
var notStartedStatus = Status.NotStarted;
console.log(Status.Done);
var searchStr = 'foo';
//const hasSearchedString = any<string>((el: string) => el.search(searchStr), ['foooooo', 'bar', 'baz']);
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var userJack = {
    name: "Jack",
    data: {
        meta: "foo"
    }
};
var result = addId(userJack);
var john = {
    name: "John",
    data: ["foo", "bar", "baz"]
};
console.log('result', result);
var date = new Date();
var a = date.toUTCString();
var b = "Hello ";
var c = console.log(b, a);
var hello = "World!";
var helloWorld = function () { return c + hello; };
helloWorld();
var getFullName = function (first, last) {
    return first + " " + last;
};
console.log(getFullName("John", "doe"));
var userMain = {
    name: getFullName("John", "Doe"),
    age: 30
};
var userInterface = {
    name: getFullName("Jane", "Doe"),
    age: 26,
    getMessage: function () {
        return "Hello" + name;
    }
};
var username = "alex";
var pageName = "1";
var errorMessage = null;
var newUser = null;
var doSomething = function () {
    console.log("doSomething");
};
var foo = "foo";
/*
const doNever = (): never => {
    throw "never";
};
*/
var vAny = 10;
var vUnknown = 10;
var s1 = vAny;
var s2 = vUnknown;
var pageNumber = '1';
var numericPageNumber = pageNumber;
var someElement = document.querySelector('.foo');
someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log('event', target.value);
});
var testUser = new User("John", "Doe");
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
console.log("someElement", someElement);
console.log(userMain.age);
console.log(userMain.name);
console.log(userInterface.age);
console.log(userInterface.name);
console.log(testUser.firstName);
console.log(testUser.lastName);
console.log(testUser.getFullName());
