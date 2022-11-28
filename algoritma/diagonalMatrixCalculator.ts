function diagonalMatrixCalculator(matrix:number[][]): number | string {
let isValid : boolean = true;
let diagonalA : number= 0;
let diagonalB : number = 0;

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix.length !== matrix[i].length) {
      isValid = false;
    }
  }
  diagonalA = diagonalA + matrix[matrix.length - i - 1][i];
  diagonalB = diagonalB + matrix[i][i]
  if (!isValid) {
    return (`Matrix not valid`);
  }
}
let result : number= diagonalB - diagonalA
return result
}

console.log(diagonalMatrixCalculator([
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9],
  ]))