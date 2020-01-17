"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Welcome Back';
console.log(message);
var x = 10;
var y = 20;
var title = 'Convention';
var isBeginner = true;
var total = 0;
var name = 'Boy';
var sentence = "My name is " + name + " I am a beginner in Typescript";
console.log(sentence);
// Null or undefined
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// Array Type
var list1 = [1, 2, 3];
var list2 = [1, 2, 5];
// tuple
var person1 = ['chris', 2];
// Enum Type
var Color;
(function (Color) {
    Color[Color["red"] = 100] = "red";
    Color[Color["green"] = 101] = "green";
    Color[Color["blue"] = 102] = "blue";
})(Color || (Color = {}));
;
var c = Color.green;
console.log(c);
// any type --> similiar to javascript var, which allows 
// the variable to be any type of variable
var randomValue = 10;
randomValue = true;
randomValue = 'Viwshas';
var myVariable = 10;
// if the the object has the property name
// ! Still confused with '!!'
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// (myVariable as string).toUpperCase();
var a;
a = 10;
a = true;
var b = 20;
// I know the value is not controlled. Maybe the value
// is from the library. 
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
anyType = true;
//* '?'--> makes the parameter optional.
//! the optional parameter is the 2nd location
// * the default value of the parameter 2
function add(num1, num2) {
    if (num2 === void 0) { num2 = 20; }
    if (num2)
        return (num1 + num2);
    else
        return num1;
}
console.log(add(5));
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce'
};
fullName(p);
//class 
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
//instance
var emp1 = new Employee('Vishwas');
console.log(emp1.employeeName);
emp1.greet();
// Inheritance 
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks " + this.employeeName);
    };
    return Manager;
}(Employee));
var m1 = new Manager('Bruce');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
