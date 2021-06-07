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