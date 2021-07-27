interface UsePartial {
    a: string,
    b: string
}
const canBeEmpty: Partial<UsePartial> = {};

interface UseRequired {
    a?: string,
    b?:string
}
const cannotBeEmpty: Required<UsePartial> = {
    a: "a",
    b: "a"
}

interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",

};

// todo.title = "Hello"; - Fails

interface CatInfo {
  age: number;
  breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

//Pick Keys and Values
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo2, "title" | "completed">;

const todoTwo: TodoPreview = {
  title: "Clean room",
  completed: false,
};


interface Todo3 {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview2 = Pick<Todo3, "title" | "completed">;

const todo3: TodoPreview2 = {
  title: "Clean room",
  completed: false,
};

type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
// Exlcudes repetetives
const testExclue: T1 = "c"

type nonull = NonNullable<null | string>
const cantbenuul: nonull = 'cantbenull'

type parms = Parameters<(s: string) => void>;
//Each Functions Params is added to the tuple
const testparams: parms = ["onestring"]

type cp = ConstructorParameters<ErrorConstructor>;
const testparms: cp = ["f"]

const numberReturn: ReturnType<() => number> = 1;

class C {a = 1; b = 2;}
type instanceType = InstanceType<typeof C>;

function toHex(this: Number) {
  return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) { //Makes sure n is the type of this of the toNext function
  return toHex.apply(n);
}

function toHex2(this: Number) {
  return this.toString(16);
}

const fiveToHex: OmitThisParameter<typeof toHex2> = toHex2.bind(5);

console.log(fiveToHex());

type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    },
  },
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);

//String Manipulation
type uppercase = Uppercase<"makeallupercase">
const testuppercase: uppercase = "MAKEALLUPERCASE"
type lowercase = Lowercase<"MAKEALLLOWERCASE">
const testlowercase: lowercase = 'makealllowercase'
type capitalize = Capitalize<"capitalize">
const testcapitalize: capitalize = "Capitalize"
type uncapitalize = Uncapitalize<"Uncapitalize">
const testuncapatalize: uncapitalize = "uncapitalize"
