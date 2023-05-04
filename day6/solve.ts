import fs from "node:fs";

const input = String(fs.readFileSync("./test.txt"));

// test
let result
if((result = answer('mjqjpqmgbljsphdztnvjfqwrcgsmlb')) !== 19) {
  throw('wrong: ' + result);
}

if((result = answer('bvwbjplbgvbhsrlpgdmjqwftvncz')) !== 23) {
  throw('wrong: ' + result);
}

if((result = answer('nppdvjthqldpwncqszvftbrmjlhg')) !== 23) {
  throw('wrong: ' + result);
}

if((result = answer('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')) !== 29) {
  throw('wrong: ' + result);
}

if((result = answer('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')) !== 26) {
  throw('wrong: ' + result);
}

//answer
console.log(answer(input));

/**
 * 
 */
function answer(data: string) {
  let numberOfCharacters = 14;
  let result = numberOfCharacters;
  let checkCharacters = Array.from(data.substring(0, numberOfCharacters));
  

  while(checkCharacters.filter((value, index, self) => {
    return self.indexOf(value) === index;
  }).length !== numberOfCharacters) {
    if(!data[result]) {
      throw new Error("Out of bounds");
    }
    checkCharacters.shift();
    checkCharacters.push(data[result]);
    result++;
  };

  
  // for(i = 0; i < numberOfCharacters; i++){

  // }
  // let [a,b,c,d]= Array.from(data);
  // while(a === b || a === c || a === d ||
  //   b === c || b === d ||
  //   c === d) {
  //     a = b;
  //     b = c;
  //     c = d;
  //     d = data[result];
  //     result++;
  //   }
    return result;
}
