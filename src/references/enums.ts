enum WordNumRepersentations {
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN
}


const addTwoNumbers = (first: WordNumRepersentations, second: WordNumRepersentations): number => {
  return first + second;
}


enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

enum BooleanLikeHeterogeneousEnum {
  No = 0,
 
  Yes = "YES",
}

enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = "123".length,
}

enum E {
  X,
  Y,
  Z,
}

function f(obj: { X: number }) {
  return obj.X;
}

// Works, since 'E' has a property named 'X' which is a number.
f(E);

enum Enum {
  A,
}

let a = Enum.A;
let nameOfA = Enum[a]; // "A"

const enum Directions {
  Up,
  Down,
  Left,
  Right,
}

let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right,
];

//Declare an enum
declare enum Enum2 {
  A = 1,
  B,
  C = 2,
}

// Enums and Objects Being Use Interchangable

enum EnumVersion {
  A,
  B,
  C
}

const ObjectVersion = {
  A: 1,
  B: 2,
  C: 3
} as const

type ObjectVersion = typeof ObjectVersion[keyof typeof ObjectVersion];

const uenum: EnumVersion = EnumVersion.A;
const uobject: ObjectVersion = ObjectVersion.A;


