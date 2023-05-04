import fs from "node:fs";

const data = String(fs.readFileSync("./input.txt"));

let count=0;
for(const line of data.split("\n")) {
  if(!line) {continue}
  const ranges = line.split(",");
  const [firstRange, secondRange] = ranges.map((range) => range.split("-").map((number => parseInt(number))));
  console.log(line, firstRange, secondRange);
  // console.log(firstRange, secondRange)

  // There is an intersection if:
  // the start of one is before the end of the other _and_ after the start of the other
  // the end of one is before the end of the other _and_ after the start of the other
  // And the inverse

  if(
   isInside(firstRange, secondRange) ||
   isInside(secondRange, firstRange)
  ) {
    console.log("FOUND", firstRange, secondRange);
    count++;
  } else {
    // if(firstRange[0] === )
  }
}
function isInside(firstRange: number[], secondRange: number[]) {
  return  (firstRange[0] >= secondRange[0] && firstRange[0] <= secondRange[1]) ||
  (firstRange[1] >= secondRange[0] && firstRange[1] <= secondRange[1]);

}
console.log(count);