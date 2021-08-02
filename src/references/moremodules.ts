export interface StringValidator {
  isAcceptable(s: string): boolean;
}

//We can bring in items from other files.
import { StringValidator } from "./StringValidator";
export const numberRegexp = /^[0-9]+$/;
export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}

class ZipCodeValidator2 implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
export { ZipCodeValidator2 };
export { ZipCodeValidator2 as mainValidator };

// Export original validator but rename it
export { ZipCodeValidator as RegExpBasedZipCodeValidator } from "./ZipCodeValidator";

export * from "./StringValidator"; // exports 'StringValidator' interface
export * from "./ZipCodeValidator"; // exports 'ZipCodeValidator' class and 'numberRegexp' constant value
export * from "./ParseIntBasedZipCodeValidator"; //  exports the 'ParseIntBasedZipCodeValidator' class
// and re-exports 'RegExpBasedZipCodeValidator' as alias
// of the 'ZipCodeValidator' class from 'ZipCodeValidator.ts'
// module.

import {single} from "./single"
import {single as renamed} from "./single"
import defaultExport from "./single"
import * as all from "./single"
import "./single"

// Explicitly use import type
import type { APIResponseType } from "./api";

//Export default
export default function defaultExportFunction() {
    return 'Default Function'
}

//Export all
export * as utilities from "./utilities";

//Setting export as a variable (different type of export)
let numberRegexp2 = /^[0-9]+$/;
class ZipCodeValidator3{
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
export = ZipCodeValidator3;

//Different type of import that works with other export style.
import zip = require("./ZipCodeValidator");
// Some samples to try
let strings = ["Hello", "98052", "101"];
// Validators to use
let validator = new zip();
// Show whether each string passed each validator
strings.forEach((s) => {
  console.log(
    `"${s}" - ${validator.isAcceptable(s) ? "matches" : "does not match"}`
  );
});

//Example of code generation
import m = require("mod");
export let t = m.something + 1;

//AMD
define(["require", "exports", "./mod"], function (require, exports, mod_1) {
  exports.t = mod_1.something + 1;
});

//Common JS
var mod_1 = require("./mod");
exports.t = mod_1.something + 1;

//UMD
(function (factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    var v = factory(require, exports);
    if (v !== undefined) module.exports = v;
  } else if (typeof define === "function" && define.amd) {
    define(["require", "exports", "./mod"], factory);
  }
})(function (require, exports) {
  var mod_1 = require("./mod");
  exports.t = mod_1.something + 1;
});

//System
System.register(["./mod"], function (exports_1) {
  var mod_1;
  var t;
  return {
    setters: [
      function (mod_1_1) {
        mod_1 = mod_1_1;
      },
    ],
    execute: function () {
      exports_1("t", (t = mod_1.something + 1));
    },
  };
});

//Dynamic Module Loading
declare function require(moduleName: string): any;
import { ZipCodeValidator as Zip } from "./ZipCodeValidator";
if (true) {
  let ZipCodeValidator: typeof Zip = require("./ZipCodeValidator");
  let validator = new ZipCodeValidator();
  if (validator.isAcceptable("...")) {
    /* ... */
  }
}

//Example of .d.ts files for modules
/** declare module "url" {
  export interface Url {
    protocol?: string;
    hostname?: string;
    pathname?: string;
  }
  export function parse(
    urlStr: string,
    parseQueryString?,
    slashesDenoteHost?
  ): Url;
}
declare module "path" {
  export function normalize(p: string): string;
  export function join(...paths: any[]): string;
  export var sep: string;
} **/

//Or if your lazy just give the module a moduleName
// declare module "hot-new-module";


// Declare modules for other types of files.
// declare module "*!text" {
//   const content: string;
//   export default content;
// }
// // Some do it the other way around.
// declare module "json!*" {
//   const value: any;
//   export default value;
// }

//Import other types of files
// import fileContent from "./xyz.txt!text";
// import data from "json!http://example.com/data.json";
// console.log(data, fileContent);

//Export default if only one thing.
export default class OnlyThing {
    a = 1;
}

//If multiple, use normal export top level
export function first() {}
export function next() {}

//If there is a lot of thing needed to be imported, use *
export class Dog { }
export class Cat { }
export class Tree {}
export class Flower {}

import * as myLargeModule from "./MyLargeModule.ts";
let x = new myLargeModule.Dog();


//Dont export namespaces
export namespace dontExportThis {export function a() {}}
