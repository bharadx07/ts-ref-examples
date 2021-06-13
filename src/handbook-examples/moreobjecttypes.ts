//Creating a readonly property in a object.
interface SomeType {
    readonly prop: string; //Now the item prop cannot be modified.
}
function userReadonly(obj: SomeType) {
    // We can read it:
    console.log(`Prop has the value '${obj.prop}'.`);
    // We can't reassign it:
    // obj.prop = "hello"; -> Erorr, prop is readonly.
}

//Index types.
//We use them when we dont know the exact data but know how they interact.
interface StringArray {
    [index: number]: string;
}
const indexedArray: StringArray = ["one string"]; //This states that any number key will give a string.

//Extending types, have a base type and add more.
interface baseType {
    a: string
}
interface extendedTyped extends baseType {
    b: string
}
const complete: extendedTyped = {a: "a", b: "b"};

//Union types, combine two types together
interface anotherType {b: string};
type bothTypes = baseType & anotherType
const anotherComplete: bothTypes = {a: "a", b: "b"};

//Fixing Generic Interfaces.
//Lets take an example, we have a bag with contents, but are not sure what the contents will be like. We want to generate an interface.
//We could have a any type and do checks, or do some type asserations, but a better way would to generate a 'generic' type like this:
interface Bag<typeofContents> {
    contents: typeofContents
}
/*And now we can easily use this*/ const myBag: Bag<string> = {contents: "stuff"};

//We can also eliminate overloads by using these types in functions
function setContents<Type>(box: Bag<Type>, newContents: Type) {
    box.contents = newContents;
}

//Feel free to also use a type alias for the same purpose. 
type BagType<Type> = {
    contents: Type;
};

//Here is a full example with type alias's and generic types.
type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
type OneOrManyOrNullStrings = OneOrManyOrNull<string>;


//The ARRAY type.
//One of the most common generic types that will ever be used is the Array type.
//Whenever we use 'number[]' it is a shortcut for 'Array<number>' like shown:
const returnFirstString = (arr: Array<string>) => arr[1] ?? null
const inputs: string[] = ["Bob"];
returnFirstString(inputs); //Works. string[] and Array<string> are the same

//The ReadonlyArray type.
//A special type of array that cannot be changed
const colors: ReadonlyArray<string> = ["red", "green", "blue"];
/*We can read*/ console.log(colors.length);
/*Cant edit, error: colors.push("yellow") */

//Tuples.
//An array type that knows the exact length and types and exact positions.
type StringNumberPairing = [string, number]; //Length 2, [0] -> string, [1] -> number.
//With this we can get some very strict and nice autocomplete.
function useAPair(pair: StringNumberPairing) {
    const [isAString, isANumber] = pair; //We know the types now.
    console.log(isAString[0]);
    console.log(isANumber.toString())
}
useAPair(["B", 0]);

//Optional Tuple Params.
type OptionalParam = [string, number, string?];
const optionalParamUsage: OptionalParam = ["astring", 1];
//A similar things applies to rest elements
type restElm = [...boolean[]];

//Readonly Tuples
const takeAReadonlyTuple = (readonlyt: readonly [string, string]) => {
    console.log(readonlyt[0].toString());
    //readonlyt[0] = 1, fail it is readonly.
}

//Readonly edge case.
let point = [3, 4] as const;
function distanceFromOrigin([x, y]: [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}
// distanceFromOrigin(point), error: will be taken as a readonly so will not work.
