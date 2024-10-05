//3.Xây dựng hàm có tham số là 1 mảng. Tính tổng các số âm trong mảng sau đó trả về kết quả tổng.
function sumNegativeNumbers(arr) {
  let sum = 0;
  for (let index of arr) {
    if (index < 0) sum += index;
  }
  return sum;
}

let arr = [1, 2, -3, -4, 5, -6];
let sum = sumNegativeNumbers(arr);
console.log("Tổng các số âm trong mảng là: " + sum);
