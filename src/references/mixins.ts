// Our Base Class
class Sprite {
  name = "";
  x = 0;
  y = 0;

  constructor(name: string) {
    this.name = name;
  }
}

//Type for any class with a constructor.
type Constructor = new (...args: any[]) => {};

// Mixin will add a scale property with a set and get property
function Scale<TBase extends Constructor>(Base: TBase) {
  return class Scaling extends Base {
    _scale = 1;

    setScale(scale: number) {
      this._scale = scale;
    }

    get scale(): number {
      return this._scale;
    }
  };
}


const ScaledSprite = Scale(Sprite);

const ScaledCharacter = new ScaledSprite("Amazing Character")
const NormalCharacter = new Sprite("Okay Character");

// Constrained Mixings

//Build a generic constructor type that we can use to build other types to constrain our mixings.
type GConstructor<T = {}> = new (...args: any[]) => T;

//Now we create a constrained mixin type.
type Positionable = GConstructor<{ setPos: (x: number, y: number) => void }>;

function Jumpable<TBase extends Positionable>(Base: TBase) {
  return class Jumpable extends Base {
    jump() {
      // This mixin will only work if it is passed a base class with setPos
      this.setPos(0, 20);
    }
  };
}

class Based {
  setPos(x: number, y: number) {
    return x+ y;
  }
}

const SpecialBased = Jumpable(Based);

const useSpecialBase = new SpecialBased();

//Other Mixin Pattern
function base<T>(): any {
  class Base {
    static prop: T;
  }
  return Base;
}

function derived<T>(): any {
  class Derived extends base<T>() {
    static anotherProp: T;
  }
  return Derived;
}

class Spec extends derived<string>() {}

Spec.prop; // string
Spec.anotherProp; // string
