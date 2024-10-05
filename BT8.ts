//8.	Xây dựng hàm tìm số chẵn đầu tiên trong mảng sau đó trả về kết quả của số chẵn đó.
function firstEven(arr) {
  for (let i of arr) {
    if (i % 2 == 0) return i;
  }
  return -1;
}

let arr = [
  1, 3, 5, 7, 9, 2, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37,
];
let result = firstEven(arr);
if (result === -1) {
  console.log("Trong mảng ko có số chẵn");
} else {
  console.log("Số chẵn đầu tiên trong mảng là: " + result);
}
