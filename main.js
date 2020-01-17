"use strict";
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
function add(num1, num2) {
    if (num2)
        return (num1 + num2);
    else
        return num1;
}
add(5);
