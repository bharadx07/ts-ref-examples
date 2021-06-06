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

