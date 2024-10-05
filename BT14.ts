//14.Xây dựng hàm tìm giá trị nhỏ nhất trong mảng. Trả về giá trị nhỏ nhất.
function findMin(arr) {
    let min = arr[0];
    for (let i of arr) {
        if (i < min)
            min = i;
    }
    return min;
}

let arr = [1, 2, 3, 4, 5];
let min = findMin(arr);
console.log("Giá trị nhỏ nhất trong mảng là: " + min);