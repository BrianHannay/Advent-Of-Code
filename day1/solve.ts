import fs from "node:fs";


const data = String(fs.readFileSync("./input.txt"));

let max=0;
const inputs=data.split("\n\n");
const totals = inputs.map(input => {
	const lines = input.split("\n");
	let counter=0;
	for(const line of lines) {
		counter+=Number(line);
	}
	return counter;
}).sort((a, b) => b-a);

let sum=0;
for(let i = 0; i<3;i++) {
console.log(totals[i]);
sum+=totals[i];
}
console.log(sum);
console.log(totals.slice(0,3));
console.log(totals);

