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
