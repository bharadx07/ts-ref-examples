//Generic Types.
//Example, first pos of an array.
function getFirstPos<firstType>(arr: any): firstType {
    return arr[0];
} 
console.log(getFirstPos<string>(["First"])); //By adding the generic type in the function call, we can generate the return type.

//Type params in generic constraints.
function getProperty<Values, Key extends keyof Values>(obj: Values, key: Key) { //We can derive types based on other generic types based on the constraints.
    return obj[key];
}
getProperty({a: "a string"}, "a") //Now we can only have the second parameter be the keys of the first object.

//Keyof type operator.
type Point = {x: number, y: number} //Modeling and object with keys 'x' and 'y'.
type PointKeys = keyof Point //The type derived will be 'x' | 'y', because those are the key options.
const keyOptions: PointKeys[] = ['x', 'y'] //Autocomplete for usage.

//Typeof operator.
//Javascript gives us a typeof opperend that returns the string representation of a type.
const aTypeString: string = typeof "String";
console.log(aTypeString) //Prints 'string'
//Typescript extends the functionality with a typeof opperend that reffers to the actual typescript type.
const realTypeFunctionality: typeof aTypeString = "String"; //This sets the type of the variable to be a string.

//Indexed access types.
//We can use an indexed access type to look up a specific property on another type at a certain index.
type Bharadwaj = {passion: string}
type passionType = Bharadwaj["passion"] //This will be the type 'string' since we are referring to the property 'passion'
//Using the arbitary number for arrays
type arrayExample = [{a: number}]
type whatIsAInAArrayExample = arrayExample[number]["a"] //The number says any index in the array.
//You cannot refer to types via constants.
const passionVariable = "passion" /* Bharadwaj[passionVariable] */ //Wont work.
//We can though store it in a type for a similar refactoring.
type passionTypeStore = "passion"
type usePassionTypeStore = Bharadwaj[passionTypeStore] //Works, will know we are referring to 'passion'

//Conditional types.
//Assign a type based on condtions
type AnotherString = "string";
type whatToAssign = AnotherString extends string ? string : any //We be set to string based on our conditions.
//Infering in condtions
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type; //In our conditions we tell ts to infer the type Item exists to set the type.

//Mapped types.
//When you don’t want to repeat yourself, sometimes a type needs to be based on another type.
type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean; //We can map through our infered type and generate types for them like the .map function
};
//Now we can easily generate types.
type FeatureFlags = {
    darkMode: () => void;
    newUserProfile: () => void;
};
type FeatureOptions = OptionsFlags<FeatureFlags>; //Booleans for each property.

//Mapping modifiers
type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property]; //Generates a type similar to the one given as a input, but without the readonly attr.
  };
  
type LockedAccount = {
    readonly id: string;
    readonly name: string;
}; //Readonly version.
  
type UnlockedAccount = CreateMutable<LockedAccount>; //Now we get the same Locked Account without the readonly.

//Template literal types.
//A simple version, generate a type using a template string.
type World = "world";
type Greeting = `hello ${World}`;
const useTheGeneratedType: Greeting = "hello world" //Only string allowed;
//Complex usage. Generate a variety of different strings that can be used.
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`; //Any Email or Footer followed by _id;
const complexExample: AllLocaleIDs = "email_heading_id"; //Can use any of the four follwed by _id.