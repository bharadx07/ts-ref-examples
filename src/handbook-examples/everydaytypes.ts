//Primitives
const isAString: string = "String" //Any string or character
const isANumber: number = 1 //A float or int
const isABoolean: boolean = true // true or false

//Any
const canBeAnything: any = "anything" //Can be anything

//Arrays, two ways to declared
const aNumberArray: number[] = [1,2,3]
const aStringArray: Array<string> = ["string", "anotherstring", "anotherstring"]

//Function annotations
//Params
function annotateParams(a: string) {
    console.log(a)
} // Only a string can be passed
//Return Types
function annotateReturn(): number {
    return 69
} //Returns a number

//Arrow Function
const arrowFunction = (): string => 'Hello World' //Returns a string

//Variable Type
const arrowFunctionVar: () => number = () => 1 //Returns a number


//Objects
//Required
const requiredParams: {a: string, b: number} = {
    a: "hello",
    b: 20
}
//Not Required
const notRequired: {a: string, b?:string} = {
    a: "hello"
} //Still Works

//Union types
let canBeNumberAndString: number | string = "Start String"
canBeNumberAndString = 1 //Can also be a number

//Custom Types
type FavColors = "Blue" | "Green"
const aLikedColor: FavColors = 'Blue' //We get some nice autcomple and checking

//Type assertations
const stringitem = "Blue";
const converttocolor = stringitem as FavColors //The types overlap so we can convert


//Literal Types
const mustbehello: "Hello" = "Hello" //Not Very Useful

//Null or Undefined Example:
function doSomething(x: string | null) /*We can allow something to me null */ {
    if (x === null) {
      console.log("Null"); //Needed for strict null checks
    } else {
      console.log("Hello, " + x.toUpperCase());
    }
}

//Symbol
const firstName: Symbol = Symbol("name");
