export function multiplyMatrix({ matrix1, matrix2 }) {
  const rowsMatrix1 = matrix1.length
  const columnsMatrix1 = matrix1[0].length
  const columnsMatrix2 = matrix2[0].length

  const result = new Array(rowsMatrix1)

  for (let i = 0; i < rowsMatrix1; i++) {
    result[i] = new Array(columnsMatrix2)
    for (let j = 0; j < columnsMatrix2; j++) {
      result[i][j] = 0
      for (let k = 0; k < columnsMatrix1; k++) {
        result[i][j] += matrix1[i][k] * matrix2[k][j]
      }
    }
  }

  return result
}
