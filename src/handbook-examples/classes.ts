// Init and Change Value of a class
class Point {
  x: number;
  y: number;

  constructor() {
      this.x = 1;
      this.y = 1
  }
}

const pt = new Point();
pt.x = 0;
pt.y = 0;

// Use Values
console.log(`${pt.x}, ${pt.y}`);

class OKGreeter {
  // Not initialized, but no error
  name!: string;
}

class Greeter {
  readonly name: string = "world";

  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }

  err() {
    //this.name = "not ok";
  }
}
const g = new Greeter();
// g.name = "also not ok";


class Test extends Greeter {
    constructor() {
        super()
        console.log(this.name)
    }
}

let x:  string = 'other hello'

class C {
  x: string = "hello";

  m() {
    // This is trying to modify 'x' from line 1, not the class property
    x = "world";
  }
}


class Ctow {
  _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}

const accessor = new Ctow();  

accessor.length = 1;
console.log(accessor.length)

interface Pingable {
  ping(): void;
  id: number,
  external: string[]
}

class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
  id = 100
  external =  ["he"]

}

class Animal {
  move() {
    console.log("Moving along!");
  }
}

class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}

const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);

class Extentions {
    public a = 1;
    private b = 3;
    protected c = 4;
}

class Extention extends Extentions {
    testing() {
        this.c = 2;
    }
}

const instance = new Extentions();
console.log(instance.a)

class MyClass {
  static x = 0;
  static printX() {
    console.log(MyClass.x);
  }
}
console.log(MyClass.x);
MyClass.printX();

class Base {
  static getGreeting() {
    return "Hello world";
  }
}
class Derived extends Base {
  myGreeting = Derived.getGreeting();
}

class Box<Type> {
  contents: Type;
  constructor(value: Type) {
    this.contents = value;
  }
}

const b = new Box("hello!");
     
class first {
    match(test: this) {
        return test === this
    }
}

const ins = new first();
ins.match(new first())


abstract class implementv {
    abstract a: string;
    abstract b(): number
}

class V extends implementv {
    a = 'hellow'

    b() {
       return 1; 
    }
}

class Empty {}

function fn(x: Empty) {
  // can't do anything with 'x', so I won't
}

// All OK!
fn(window);
fn({});
fn(fn);

