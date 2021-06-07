//Typescript gives so much utilities and syntactic sugar for our function declarations.

//We set a function type through an arrow function type syntax.
function runAnotherFuncton(fn: () => void /*Declare Function*/) {
    fn()
}
//Now we get some typechecking for the function we pass in making sure it is void with no parameters.
runAnotherFuncton(() => console.log("We have run this function through another function."))

//We can also declare external types to pass in.
type passFunctionIn = () => string
function getNameAndPrint(fn: passFunctionIn) {
    console.log("Hello " + fn())
}
getNameAndPrint(() => "Bharadwaj")

//We can add call signatures for functions with properties.
type FunctionWithProperties = {
    description: string;
    (someArg: number): boolean;
  };
function useFunctionWithProperty(fn: FunctionWithProperties) {
    console.log(fn.description + " returned " + fn(6) + '.');
}
//Now we can declare a function and add a property.
function exampleProperties(someArg: number): boolean {
    console.log(`We got ${someArg}.`)
    return true;
}
exampleProperties.description = "The function"
useFunctionWithProperty(exampleProperties)

//Sometimes class instances can be passed in. We deal with them like this.
type SomeConstructor = {
    new (s: string): any;
  };
function fnWithClasses(ctor: SomeConstructor) {
    return new ctor("hello");
}

//Fixing generic functions.
//If we have a function that takes an any type param but we want to staticly type the return value like a function that returns the first element of an array, we do it like this.
function getFirstElmofArray<firstType>(arr: any[]): firstType {
    return arr[0];
}
//Now we can set the type of the first element like this;
console.log(getFirstElmofArray<number>([0, "Hello"]))

//Now what if we want our types to have certain constraints, like having a length attr. We would do it like this:
function findTheLongestLength<paramtype extends {length: number}>(a: paramtype, b: paramtype): paramtype {
    if (a.length >= b.length) {
        return a;
      } else {
        return b;
    }
}
//Now we get some sweet param checks
findTheLongestLength([1,4], [2,4]);
// findTheLongestLength(1,2) -> Fails because numbers do not have lengths.

//Now what if we want to have a generic function, but that will have two different types of inputs. Like this:
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
}
//If we only passed in one type as our util function type, it would not work as it would have two differnt types to combine. 
//We can fix this issue with a union type.
combine<string | number>([1, 2, 3], ["hello"]);

// We can also have optional function params
function optionalFunctions(a: string, b?: string): string {
    return `We got ${a} and ${b ?? 'nothing'} as our params`
}
optionalFunctions("Hello") //Still Works without the second param.

//Sometimes we have functions that have wildly differnt param types. We deal with them through function overloads. Here is an example

function makeDate(timestamp: number): Date; //One version.
function makeDate(m: number, d: number, y: number): Date; //Modeling Another version.
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date { //Declare function here.
  if (d !== undefined && y !== undefined) { //Logic based on different params
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3); -> No variant exists with two params

//Important Function Return Types
// VOID -> Nothing is returned
function noop(): void {
    return; //nothing is returned.
  }
// OBJECT -> Anything non primitive.
function zeobject(): object {
    return {};
}
//UNKNOWN -> Any but with more safety.
function f2(): unknown {
    return 1; //Will protect the user for some type issues.
}
//NEVER -> Never will hit the return step
function getErrored(msg: string): never {
    throw new Error(msg)
}

//Rest Paramenters, Strongly type unlimited inputs.
function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
}

const a = multiply(10, 1, 2, 3, 4); 

//Function destructuring
//We can strongly type destructures from function params like this:
function sum({ a, b, c }: { a: number; b: number; c: number }): number {
    return a + b + c
} 
//We are setting a and b and c to be the types we want so our response works the way want.
//Now we can call the function with the set types.
sum({a: 1, b: 2, c: 3})