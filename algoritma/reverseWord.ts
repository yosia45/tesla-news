let kata  = "NEGIE1"
let kebalikan = ""

function reverseWord (kata:string): string{
    for (let i = 0; i < kata.length - 1; i++) {
        kebalikan += kata[kata.length - i - 2];
      }
      let kataBaru = kebalikan + kata[kata.length - 1];
      return kataBaru
}

console.log(reverseWord("NEGIE1"))

