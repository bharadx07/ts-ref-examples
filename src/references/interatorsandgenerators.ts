function wordToArrayWithCharacters<T>(arr: Iterable<T>): T[] {
  return [...arr]
}


console.log(wordToArrayWithCharacters<string>("Word"))


const names = ["Bharadwaj", "Tejaswini", "Prakash"]

for (const ind in names) {
  console.log(ind);
}

for (const name of names) {
  console.log(name)
}

let pets = new Set(["Cat", "Dog", "Hamster"]);

for (let pet in pets) {
  console.log(pet); // nothing is printed
}

for (let pet of pets) {
  console.log(pet); // "Cat", "Dog", "Hamster"
}


let numbers = [1, 2, 3];
for (let num of numbers) {
  console.log(num);
}

// Compiled into this:
// var numbers = [1, 2, 3];
// for (var _i = 0; _i < numbers.length; _i++) {
//   var num = numbers[_i];
//   console.log(num);
// }
