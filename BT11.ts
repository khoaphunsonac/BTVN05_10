//11.Xây dựng hàm đếm số lần xuất hiện của 1 số x trong mảng a. Sau đó trả về kết quả đếm được.
function countX(arr, x) {
    let count = 0;
    for (let i of arr) {
        if (i == x)
            count++;
    }
    return count;
}

let arr = [1, 2, 3, 4, 5, 5];
let x = 5;
let count = countX(arr, x);
console.log("Số lần xuất hiện của số " + x + " trong mảng là: " + count);