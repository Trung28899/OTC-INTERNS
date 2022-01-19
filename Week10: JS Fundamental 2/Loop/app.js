// 1. For loop

console.log("// 1. For loop basic Syntax: ");
for (let counter = 0; counter < 6; counter++) {
  console.log(`Counting ${counter}`);
}

console.log("");
console.log("// 1. Break: ");
for (let counter = 0; counter < 6; counter++) {
  if (counter === 3) break;
  console.log(`Counting ${counter}`);
}

console.log("");
console.log("// 1. Continue: ");
for (let counter = 0; counter < 6; counter++) {
  if (counter === 3) continue;
  console.log(`Counting ${counter}`);
}

// 2. While loop:
console.log("");
console.log("// 2. While loop basic Syntax: ");

let counter = 0;

while (counter < 6) {
  console.log(`Counting ${counter}`);
  counter++;
}
