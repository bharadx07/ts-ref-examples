import hello from "./hello.js";
import { pi, phi as phy, absolute } from "./maths.js";
// @filename: app.ts
import * as math from "./maths.js";
// @filename: app.ts
import "./maths.js";
import { Cat, Dog } from "./animal.js";
import { valueOfPi } from "./constants.js";

type Animals = Cat | Dog;
console.log("3.14");
console.log(math.pi);
const positivePhi = math.absolute(math.phi);
console.log(pi);
const absPhi = absolute(phy);
hello(); 

export {}
// @filename: hello.ts
export default function helloWorld() {
  console.log("Hello, world!");
}
// @filename: maths.ts
export var pi = 3.14;
export let squareTwo = 1.41;
export const phi = 1.61;
// @filename: animal.ts
export type Cat = { breed: string; yearOfBirth: number };

export interface Dog {
  breeds: string[];
  yearOfBirth: number;
}

export const anum = 1;
module.exports = {
    anum: 1
}
export const twoPi = valueOfPi * 2;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoPi = void 0;
const constants_js_1 = require("./constants.js");
exports.twoPi = constants_js_1.valueOfPi * 2;

(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./constants.js"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.twoPi = void 0;
    const constants_js_1 = require("./constants.js");
    exports.twoPi = constants_js_1.valueOfPi * 2;
});

export class RandomNumberGenerator {}

export function absolute(num: number) {
  if (num < 0) return num * -1;
  return num;
}
