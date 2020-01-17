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
function add(num1:number, num2?:number) { 
    if (num2)
        return (num1 + num2);
    else
        return num1;    
}

add(5);

