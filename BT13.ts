//13.Xây dựng hàm tìm giá trị lớn nhất trong mảng. Trả về giá trị lớn nhất.
function findMax(arr) {
    let max = arr[0];
    for (let i of arr) {
        if (i > max)
            max = i;
    }
    return max;
}

let arr = [1, 2, 3, 4, 5];
let max = findMax(arr);
console.log("Giá trị lớn nhất trong mảng là: " + max);