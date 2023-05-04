import fs from "node:fs";

const data = String(fs.readFileSync("./input.txt"));

enum THROW {
	ROCK,
	PAPER,
	SCISSOR,
};


const input = data.split("\n");

let score = 0;
for(const rpsthrow of input) {
	if(!rpsthrow) continue;
	const [theirs, outcome] = rpsthrow.split(" ");
	if(outcome === 'X') {
		score += 0;
	} else if(outcome === 'Y') {
		score += 3;
	} else if(outcome === 'Z') {
		score += 6;
	} else {
		throw new Error("Unknown outcome:"+outcome);
	}

	// They play rock
	if(theirs === 'A') {
		// We lose, we play scissor
		if(outcome === 'X') {
			score += 3;
		// Tie, we play rock
		} else if(outcome === 'Y') {
			score += 1;
		// Win, we play paper
		} else if(outcome === 'Z') {
			score += 2;
		} else {
			throw new Error("Unknown outcome: " + outcome);
		}
	// They play paper
	} else if(theirs === 'B') {
		// We lose, we play rock
		if(outcome === 'X') {
			score += 1;
		// Tie, we play paper
		} else if(outcome === 'Y') {
			score += 2;
		// Win, we play scissor
		} else if(outcome === 'Z') {
			score += 3;
		} else {
			throw new Error("Unknown outcome: " + outcome);
		}
	// They play scissor
	} else if(theirs === 'C') {
		// We lose, we play paper
		if(outcome === 'X') {
			score += 2;
		// Tie, we play scissor
		} else if(outcome === 'Y') {
			score += 3;
		// Win, we play rock
		} else if(outcome === 'Z') {
			score += 1;
		} else {
			throw new Error("Unknown outcome: " + outcome);
		}
	} else {
		throw new Error("Unknown theirs" + theirs);
	}
}
	
console.log(score);
