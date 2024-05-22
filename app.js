const numbs = [5, 4, 8, 6, 12, 1];
//

const insertionSort = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    let currNum = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currNum; j--) {
      //
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currNum;
  }
  return arr;
};

console.log(insertionSort(numbs));
