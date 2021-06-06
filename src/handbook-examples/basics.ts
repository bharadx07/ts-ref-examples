const message = "Hello World!"; //Implicitly declared as type 'string'
//Examples of Typechecking
const lowerCaseMessage = message.toLowerCase(); //Will Succeed -> hello world
/* message() */ //Will fail, message is not a function.

//How do we make sure we take the correct type of a function

/* Lets say we have a function : function fn(x) {
    return x.toUpperCase()
} -> Take a param and convert to uppercase */

//We can annotate our parameter x to be a string, leading to a string only being accepted:
function fn(x: string) {
    return x.toUpperCase()
}

//Now we get some sweet typechecking:
fn("hello world") //Success -> HELLO WORLD
/* fn(1) */ //Fail, 1 is not a string


//Another huge issue with JS is that we can access properties that do not exist on objects

const dynamicObject = {
    foo: "bar"
}

/* dynamicObject.a */ //Fails -> a does not exist

// We staticly type a object with a interface

interface staticTypeInterface {
    foo: string,
    anumber: number
}

const staticObject: staticTypeInterface = {
    anumber: 2,
    foo: "bar"
} //We get sweet autocomplete for creating the variable and now we get checking for accessing properties:

const objectproperty = staticObject.anumber //Autocomplete and checking
/* staticObject.anonexistantthing */ //Error, doesnt exist

const announcement = "Hello World!";

//Typo Catches, will show an error
// announcement.toLocaleLowercase();
// announcement.toLocalLowerCase();

// We want this instead:
announcement.toLocaleLowerCase();

//Typechecking for multi params. Lets say we have a function like this:
function greet(person: string, day: string) {
    console.log(`Hello ${person}, today is ${day}!`);
}

//Now we get some sweet typechecking for multi params:
greet("Bharadwaj", "Monday") //Success -> Hello Bharadwaj, today is Monday!
/* fn("Bharadwaj") */ //Fail, 1 param instead of two

//Implicit Types

//Somtimes TS will assume a type of a variable if it is clear
const explcit = "Hello World" //Knows its tring
//But we can set this on our own
const implicit: string = "Hello World"