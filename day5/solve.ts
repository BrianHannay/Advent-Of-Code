import fs from "node:fs";

const data = String(fs.readFileSync("./input.txt"));
let result;


let lines = data.split('\n');
let lineNumber = 0;
let stackNumber = 1;
let stacks: string[][] = [];
for(; lineNumber < lines.length; lineNumber++) {
  const line = lines[lineNumber];
  if(line.length === 0){
    break;
  }
  let stackLine: string[] = [];
  stacks.push(stackLine);
  for(let characterIndex = 0; characterIndex < line.length; characterIndex+=4) {
    let character = line[characterIndex+1];
    stackLine.push(character);
  }
}
lineNumber++;
//Parsed stacks:
console.log(stacks);

// Continue using existing lineNumber
for(; lineNumber < lines.length; lineNumber++) {
  let instruction = lines[lineNumber];
  console.log(instruction);
  let instructionInfo;
  console.log(instructionInfo=instruction.match(/move (\d+) from (\d+) to (\d+)/));
  if(!instructionInfo) {
    throw new Error('Failed to parse: ' + instruction);
  }
  let [, count, from, to] = instructionInfo;
  console.log('move', count, 'from', from, 'to', to);

  move(parseInt(from)-1, parseInt(to)-1, parseInt(count));
}

function move(from: number, to: number, count: number) {
  let moveString = "";
  for(let column = 0; column < stacks.length; column++) {
    moveString = moveString + stacks[column][from].trimLeft();
    stacks[column][from] = ' ';
    if(moveString.length === count) {
      break;
    }
  }
  if(moveString.length < count) {
    throw new Error("Could not find " + count+ 'characters in column ' + from);
  }
  for(let i = 0; i < moveString.length; i++) {
    let character = moveString[moveString.length-1-i];
    let column = 0;
    if(stacks[0][to] !== ' ') {
      stacks.unshift(Array(stacks[1].length).fill(' '));
    }
    while(stacks[column+1][to] === ' ') {
      column++;
    }
    stacks[column][to] = character;
  }
}

result=[...stacks[0]];
for(let row = 0; row < stacks.length; row++) {
  for(let i = 0; i < result.length; i++) {
    if(result[i] === ' ') {
      result[i] = stacks[row][i];
    }
  }
}

// test
if(result.join('') !== 'MCD') {
  console.log('wrong', result.join(''));
}