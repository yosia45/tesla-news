function wordCounter(input:string[], query:string[]): number[] {
const result : number[] = [];

for (let i = 0; i < query.length; i++) {
  let count = 0;
  for (let j = 0; j < input.length; j++) {
    if (query[i] === input[j]) {
      count++;
    }
  }
  result.push(count);
}
return result
}

console.log(wordCounter(["xc", "dz", "bbb", "dz"], ["bbb", "ac", "dz"]))