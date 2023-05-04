import fs from "node:fs";

const data = String(fs.readFileSync("./input.txt"));

const inputLines = data.split("\n");

let score = 0;
for(let lineNumber = 0; lineNumber < inputLines.length && inputLines[lineNumber]; lineNumber += 3) {
  // if(!);
  const [firstLine, secondLine, thirdLine] = [inputLines[lineNumber], inputLines[lineNumber+1], inputLines[lineNumber+2]];
  const lines = [firstLine, secondLine, thirdLine];
  console.log("lines", lines.join(", "))
  const common =findCommonCharacter(lines);
  console.log("common", common);
  const priority = getPriority(common);
  console.log("priority", priority);
  score += priority;
}
console.log(score);

function getPriority(input: String) {
  if(input <= 'Z') {
    console.log(input, input.charCodeAt(0) - 64 +  + 26)
    return input.charCodeAt(0) - 64 + 26;
  } else if (input <= 'z') {
    console.log(input, input.charCodeAt(0) - 96)
    return input.charCodeAt(0) - 96;
  }
  throw new Error("Invalid input: " + input);
}

function findCommonCharacter(inputs: string[]): string {
  let testString = inputs[0];
  for(const character of Array.from(testString)) {
    if(inputs.every((input) => {
      return input.indexOf(character) !== -1;
    })) {
      return character;
    }
  }
  
  throw new Error("Could not find common character: " + inputs.join(", "))
}