export default function arrayToMatrix<T>(array: Array<T>, elementsPerLine: number): Array<T[]> {
  let matrix = [];

  for (let i = 0, k = -1; i < array.length; i++) {
      if (i % elementsPerLine === 0) {
          k++;
          matrix[k] = [];
      }

      matrix[k].push(array[i]);
  }

  return matrix;
}