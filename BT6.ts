//6.Xây dựng hàm liệt kê vị trí các số trong mảng có giá trị bằng với giá trị nhỏ nhất của mảng.
function listPosition(arr) {
  let min = arr[0];
  for (let i of arr) {
    if (i < min) min = i;
  }
  let Res = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == min) Res += i + " ";
  }
  console.log("Vị trí các số bằng số nhỏ nhất trong mảng là: " + Res);
}

let arr = [1, 2, 3, 4, 1, 5];
listPosition(arr);

