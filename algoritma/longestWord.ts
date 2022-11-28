function kataTerpanjang (sentence:string):string{
const splittedSentences = sentence.split(" ");
let longestWord = 0;
let choosenWord = "";

for (let i = 0; i < splittedSentences.length; i++) {
  if (splittedSentences[i].length > longestWord) {
    longestWord = splittedSentences[i].length;
    choosenWord = splittedSentences[i];
  }
}
return choosenWord
}

console.log(kataTerpanjang("Saya sangat senang mengerjakan soal algoritma"))