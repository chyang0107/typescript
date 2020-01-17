export{}
let message = 'Welcome Back';
console.log(message);

let x = 10;
const y = 20;

const title = 'Convention';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Boy';
let sentence: string = `My name is ${name} I am a beginner in Typescript`;
console.log(sentence);
// Null or undefined
let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined 

// Array Type
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 5];

// tuple

let person1: [string, number] = ['chris', 2]

// Enum Type

enum Color { red = 100, green, blue };
let c: Color = Color.green;
console.log(c);


// any type --> similiar to javascript var, which allows 
// the variable to be any type of variable

let randomValue: any = 10
randomValue = true;
randomValue = 'Viwshas';
let myVariable: unknown = 10;


// if the the object has the property name
// ! Still confused with '!!'
function hasName(obj: any): obj is { name: string}{
    return !!obj &&
        typeof obj === "object" && 
        "name" in obj
}

if (hasName(myVariable)) {
    console.log(myVariable.name);    
}


// (myVariable as string).toUpperCase();
let a;
a = 10;
a = true;

let b = 20;

// I know the value is not controlled. Maybe the value
// is from the library. 
let multiType: number | boolean;
multiType = 20;
multiType = true; 

let anyType: any;
anyType = 20;
anyType = true;

//* '?'--> makes the parameter optional.
//! the optional parameter is the 2nd location
// * the default value of the parameter 2
function add(num1:number, num2:number = 20) { 
    if (num2)
        return (num1 + num2);
    else
        return num1;    
}

console.log(add(5));
//I created a git project at home

//Interface, date: 1/16/2020 
// function fullName(person:{firstName: string, lastNmae: string}) {
//     console.log(`${person.firstName} ${person.lastNmae}`)
// };

// let p = {
//     firstName: 'Bruce',
//     lastNmae: 'Wayne'
// };

// fullName(p);

interface Person{
    firstName: string;
    lastName?:string;
}

function fullName(person:Person) {
    console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
     firstName: 'Bruce'
}
fullName(p);

//class 

class Employee {
    protected employeeName: string;
    
    constructor(name: string) {
        this.employeeName = name;
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }

}

//instance
let emp1 = new Employee('Vishwas');
console.log(emp1.employeeName);
emp1.greet();

// Inheritance 

class Manager extends Employee{
    constructor(managerName: string){
        super(managerName)
    }
    delegateWork(){
        console.log(`Manager delegating tasks ${this.employeeName}`);
    }
}

let m1 = new Manager('Bruce')
m1.delegateWork();
m1.greet();
console.log(m1.employeeName)